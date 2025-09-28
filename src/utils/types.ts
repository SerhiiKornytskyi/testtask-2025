export interface MainPageState {
    nextPage: string | null;
    prevPage: string | null;
    pageNum: number;
    filterState: FilterState;
}

export interface SearchResult {
    name: string;
    image: string;
    id: string;
}

export interface FilterState {
    name: string;
    status: string;
}

export interface FilterProps {
    state: FilterState;
    handleFilterChange: (newFilterState: FilterState) => void;
    refetch: () => void;
}

export interface PaginatorProps {
    goToPrevPage: () => void;
    goToNextPage: () => void;
    isNextVisible: boolean;
    isPrevVisible: boolean;
    pageNum: number;
}


