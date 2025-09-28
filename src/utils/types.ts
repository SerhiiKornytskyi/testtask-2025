export interface MainPageState {
    searchTerm: string;
    nextPage: string | null;
    prevPage: string | null;
    pageNum: number;
    pageSize: number;
}

export interface SearchResult {
    name: string;
    image: string;
    url: string;
}
