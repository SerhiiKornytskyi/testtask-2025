import {StyledPaginator, StyledPaginatorItem} from "./styled";
import type { PaginatorProps } from '@/utils/types'

function Paginator({goToPrevPage, goToNextPage, isNextVisible, isPrevVisible, pageNum}: PaginatorProps) {

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
