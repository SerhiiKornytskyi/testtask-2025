import { useState, useEffect, MouseEvent } from 'react'
import { useFetchData } from '@/customHooks/useFetchData'
import { useSearch, useNavigate, useRouter } from '@tanstack/react-router'
import type { MainPageState, FilterState } from '../../utils/types'
import {
    StyledResultWrapper,
    StyledSearchResultCard,
    StyledSearchResultCardContainer,
} from './styled'

import Paginator from '../paginator/Paginator'
import Filter from '../filter/Filter'

function Main() {
    const baseApiUrl = 'https://rickandmortyapi.com/api'
    const navigate = useNavigate()
    const search = useSearch({ from: '/' })

    const [state, setState] = useState<MainPageState>({
        nextPage: null,
        prevPage: null,
        pageNum: search.page && search.page > 0 ? search.page : 1,
        filterState: {
            name: search.name || '',
            status: search.status || '',
        },
    })

    // build URL based on current state params
    const buildUrl = (page: number, filter: FilterState) => {
        const params = new URLSearchParams()
        params.set('page', page.toString())
        if (filter.name) params.set('name', filter.name)
        if (filter.status) params.set('status', filter.status)
        return `${baseApiUrl}/character?${params.toString()}`
    }

    const [url, setUrl] = useState(buildUrl(state.pageNum, state.filterState))
    const { data, isPending, isError } = useFetchData(url)

    useEffect(() => {
        if (!isPending && !isError && data?.info) {
            setState(prev => ({
                ...prev,
                nextPage: data.info.next,
                prevPage: data.info.prev,
            }))
        }
    }, [data, isPending, isError])

    // build search object dynamically
    const getSearchParam = (filterState: FilterState, pageNum: number) => {
        const searchParams: Record<string, string | number> = { page: pageNum }
        if (filterState.name) searchParams.name = filterState.name
        if (filterState.status) searchParams.status = filterState.status
        return searchParams
    }

    const refetch = () => {
        const newUrl = buildUrl(state.pageNum, state.filterState) + `&refetch=${Date.now()}`
        setUrl(newUrl)

    }

    const handleFilterChange = (newFilterState: FilterState) => {
        const newPage = 1
        setState(prev => ({
            ...prev,
            filterState: newFilterState,
            pageNum: newPage,
        }))

        const newUrl = buildUrl(newPage, newFilterState)
        setUrl(newUrl)

        navigate({ search: getSearchParam(newFilterState, newPage) })
    }

    const goToNextPage = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        if (state.nextPage) {
            const newPage = state.pageNum + 1
            setUrl(state.nextPage)
            setState(prev => ({ ...prev, pageNum: newPage }))
            navigate({ search: getSearchParam(state.filterState, newPage) })
        }
    }

    const goToPrevPage = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        if (state.prevPage) {
            const newPage = state.pageNum - 1
            setUrl(state.prevPage)
            setState(prev => ({ ...prev, pageNum: newPage }))
            navigate({ search: getSearchParam(state.filterState, newPage) })
        }
    }

    if (isPending) return <span>Loading...</span>
    if (isError) return <span>Error!</span>

    return (
        <div>
            <Filter state={state.filterState} handleFilterChange={handleFilterChange} refetch={refetch} />
            <StyledResultWrapper>
                {data?.results?.map(char => (
                    <StyledSearchResultCardContainer key={char.id}>
                        <StyledSearchResultCard to={`character/${char.id}`}>
                            <div>
                                <img src={char.image} alt={char.name} />
                            </div>
                            <span>{char.name}</span>
                        </StyledSearchResultCard>
                    </StyledSearchResultCardContainer>
                ))}
            </StyledResultWrapper>
            <Paginator
                goToPrevPage={goToPrevPage}
                goToNextPage={goToNextPage}
                isNextVisible={state.nextPage}
                isPrevVisible={state.prevPage}
                pageNum={state.pageNum}
            />
        </div>
    )
}

export default Main
