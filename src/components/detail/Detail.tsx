import {useParams} from "@tanstack/react-router";
import {StyledWrapper} from "./styled";
import { useFetchData } from '@/customHooks/useFetchData';

function Detail() {
    const { id } = useParams({ from: '/character/$id' })
    const { data, isPending, isError } = useFetchData(`https://rickandmortyapi.com/api/character/${id}`);

    if (isPending) return <span>Loading...</span>
    if (isError) return <span>Error!</span>

    return (
            <StyledWrapper>
                <div>
                    <h2>{data.name}</h2>
                    <img src={data.image} alt={data.name} />
                    <p>Status: {data.status}</p>
                    <p>Species: {data.species}</p>
                    <p>Origin: {data.origin?.name}</p>
                </div>
            </StyledWrapper>
    )
}

export default Detail;
