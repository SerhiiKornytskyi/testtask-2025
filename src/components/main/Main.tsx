import { useState, useEffect, MouseEvent } from 'react'
import { useFetchData } from '@/customHooks/useFetchData'
import type {MainPageState} from '../../utils/types';
import {
    StyledResultWrapper,
    StyledSearchResultCard,
    StyledSearchResultCardContainer,
} from "./styled";

import Paginator from '../paginator/Paginator'

function Main() {
    const [paginatorState, setPaginatorState] = useState({ pageNum: 0, pageSize: 10 })
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')

    const { data, isPending, isError, refetch } = useFetchData(url)

    const [state, setState] = useState<MainPageState>({
        searchTerm: "",
        nextPage: null,
        prevPage: null,
        pageNum: 0,
        pageSize: 10,
    })

    useEffect(() => {
        console.log("data", data, isError)
        if (!isPending && !isError) {
            const {next, prev} = data.info;
            setState({...state, nextPage: next, prevPage: next });
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
            // handleSearch(state.searchTerm, state.pageNum + 1);
        }
    }

    const goToPrevPage = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        if (state.prevPage) {
            // handleSearch(state.searchTerm, state.pageNum - 1);
        }
    }

    return (
        <div>
            <StyledResultWrapper>
                {data?.results?.map((char) => (
                    <StyledSearchResultCardContainer key={char.id}>
                        <StyledSearchResultCard >
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
                isNextVisible={state.nextPage}
                isPrevVisible={state.prevPage}
                pageNum={state.pageNum + 1}
            />
        </div>
    )
}

export default Main
