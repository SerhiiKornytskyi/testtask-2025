import {StyledPaginator, StyledPaginatorItem} from "./styled";
import type { PaginatorProps } from '@/utils/types'

function Paginator({goToPrevPage, goToNextPage, isNextVisible, isPrevVisible, pageNum}: PaginatorProps) {
    // IMPORTANT!
    // in requirements we have "Allow the user to select the page size for pagination (select)"
    // but the API we use gives paginated response without "per page" param. Is it a mistake in requirement?
    // the way to achieve such thing is recursively get all character entries and work with large object
    // to build custom pagination around it which is kind of strange.
    return (
        <StyledPaginator>
                    <StyledPaginatorItem
                        onClick={goToPrevPage}
                        className={"paginator-prev"}
                        visible={!!isPrevVisible}
                        to={isPrevVisible}
                    >
                        {"<<< PrevPage"}
                    </StyledPaginatorItem>
            <span>Page: {pageNum}</span>
                <StyledPaginatorItem
                        onClick={goToNextPage}
                        className={"paginator-next"}
                        visible={!!isNextVisible}
                        to={isNextVisible}
                >
                    {"NextPage >>>"}
                </StyledPaginatorItem>
        </StyledPaginator>
    )
}

export default Paginator;
