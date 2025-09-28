export interface MainPageState {
    nextPage: string | null;
    prevPage: string | null;
    pageNum: number;
    filterState: FilterState;
}

export interface SearchResult {
    name: string;
    image: string;
    url: string;
}

export interface FilterState {
    name: string;
    status: string;
}

