import { useState, useEffect, MouseEvent } from 'react'
import { useFetchData } from '@/customHooks/useFetchData'
import { useSearch, useNavigate } from '@tanstack/react-router'
import type {MainPageState} from '../../utils/types';
import {
    StyledResultWrapper,
    StyledSearchResultCard,
    StyledSearchResultCardContainer,
} from "./styled";

import Paginator from '../paginator/Paginator'

function Main() {
    const baseApiUrl = 'https://rickandmortyapi.com/api';
    const navigate = useNavigate()
    const search = useSearch({ from: '/' })


    const [state, setState] = useState<MainPageState>({
        searchTerm: "",
        nextPage: null,
        prevPage: null,
        // Fallback to page 1 if negative or 0 provided
        pageNum: (search.page <= 0) ? 1 : search.page ?? 1,
        pageSize: 10,
    })

    // storing url in state ho trigger re-request through updating it
    const [url, setUrl] = useState(`${baseApiUrl}/character?page=${state.pageNum}`);

    const { data, isPending, isError } = useFetchData(url)


    useEffect(() => {
        console.log("data", data, isError)
        if (!isPending && !isError) {
            const {next, prev} = data.info;
            setState({...state, nextPage: next, prevPage: prev});
        }
    }, [data, isPending, isError])

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error!</span>
    }

    const goToNextPage = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        if (state.nextPage) {
            setUrl(state.nextPage) // update URL to next page
            setState(prev => ({ ...prev, pageNum: prev.pageNum + 1 }))
            navigate({
                search: { page: state.pageNum + 1 },
            })
        }
    }

    const goToPrevPage = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        if (state.prevPage) {
            setUrl(state.prevPage) // update URL to prev page
            setState(prev => ({ ...prev, pageNum: prev.pageNum - 1 }))
            navigate({
                search: { page: state.pageNum - 1 },
            })
        }
    }

    return (
        <div>
            <StyledResultWrapper>
                {data?.results?.map((char) => (
                    <StyledSearchResultCardContainer key={char.id}>
                        <StyledSearchResultCard
                            to={`character/$id`}
                            params={{ id: char.id.toString() }}
                        >
                            <div>
                                <img src={char.image} alt="pic"/>
                            </div>
                            <span>
                                {char.name}
                            </span>
                        </StyledSearchResultCard>
                    </StyledSearchResultCardContainer>
                ))}
            </StyledResultWrapper>
            <Paginator
                goToPrevPage={goToPrevPage}
                goToNextPage={goToNextPage}
                isNextVisible={!!state.nextPage}
                isPrevVisible={!!state.prevPage}
                pageNum={state.pageNum}
            />
        </div>
    )
}

export default Main
