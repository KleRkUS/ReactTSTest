import React from "react";

import {PaginationElem, PaginationList, PaginationActiveElem} from "../../../Styles/Pagination";
type PaginationTypes = {
    currentPage:number
    amountOfPages:number
    changePage:(i:number) => void
}

const Pagination = ({currentPage, amountOfPages, changePage}: PaginationTypes) => {

    const onElemClick = (index:number) => {
        if (index === -1 && (currentPage + 1) <= amountOfPages - 1 ) {
            changePage(currentPage + 1);
        } else if (index === -2 && currentPage - 1 > 0) {
            changePage(currentPage - 1);
        } else if (index >= 0) {
            changePage(index);
        }
    }

    const generateList:() => any[] = () => {
        let list = [];

        for (let i:number = 0; i < amountOfPages; i++) {

            if (i === currentPage) {
                list.push(
                    <PaginationActiveElem
                        data-index={i}
                        key={i}
                        onClick={() => onElemClick(i)}
                    >
                        {i+1}
                    </PaginationActiveElem>
                )
            } else {
                list.push(
                    <PaginationElem
                        data-index={i}
                        key={i}
                        onClick={() => onElemClick(i)}
                    >
                        {i + 1}
                    </PaginationElem>
                );
            }
        }

        return list;
    }

    const list = generateList();

    return(
        <PaginationList>
            <PaginationElem onClick={() => onElemClick(0)}>&lt;&lt;</PaginationElem>
            <PaginationElem onClick={() => onElemClick(-2)}>&lt;</PaginationElem>

            {list}

            <PaginationElem onClick={() => onElemClick(-1)}>&gt;</PaginationElem>
            <PaginationElem onClick={() => onElemClick(amountOfPages - 1)}>&gt;&gt;</PaginationElem>
        </PaginationList>
    )
}

export default Pagination;