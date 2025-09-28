import {useState, useEffect} from 'react'
import { useFetchData } from '../../customHooks/useFetchData'


function Main() {
    const [paginatorState, setPaginatorState] = useState({pageNum: 0, pageSize: 10});
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');
    const { data, isPending, isError } = useFetchData(url);


    useEffect(() => {
        console.log("data", data, isPending, isError);
    }, [isPending, isError]);

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error!</span>
    }

    return (
        <>
            <ul>
                {data?.results?.map((char) => (
                    <li key={char.id}>
                        {char.name} — <img src={char.image} alt={char.name} width={50} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Main;
