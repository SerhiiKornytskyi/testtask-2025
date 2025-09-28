import {useState, useEffect} from 'react'
import {StyledPaginator, StyledPaginatorItem} from "./styled";

function Paginator({goToPrevPage, goToNextPage, isNextVisible, isPrevVisible, pageNum}) {

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
