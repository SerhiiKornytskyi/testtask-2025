import { useQuery } from '@tanstack/react-query'

// custom hook to perform fetch operation with react-query
export function useFetchData(url) {
    return useQuery({
        queryKey: ['fetchCharacters', url],
        queryFn: async () => {
            const res = await fetch(url)
            if (!res.ok) {
                // throw new Error(`Error: ${res.status}`)
            }
            return res.json();
        },
        retry: 1,
    })
}
