import {useState, useEffect} from 'react'
import {StyledPaginator, StyledPaginatorItem} from "./styled";

function Paginator({goToPrevPage, goToNextPage, isNextVisible, isPrevVisible, pageNum}) {

    return (
        <StyledPaginator>
                {
                    isPrevVisible && <StyledPaginatorItem
                        onClick={goToPrevPage}
                        className={"paginator-prev"}
                    >
                        {"<<< PrevPage"}
                    </StyledPaginatorItem>
                }
            <span>Page: {pageNum}</span>
            { isNextVisible && <StyledPaginatorItem
                    onClick={goToNextPage}
                    className={"paginator-next"}
                >
                    {"NextPage >>>"}
                </StyledPaginatorItem>
            }
        </StyledPaginator>
    )
}

export default Paginator;
