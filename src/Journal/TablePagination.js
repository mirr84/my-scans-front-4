import React from 'react';


import {connector} from "../store/utils/connector";
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";
import {LIMIT_ROW_PAGE} from "./serviceJournal";

const TablePagination = ({state, dispatch}) => {

    const countPage = state.journalReducer.data.foundCount / LIMIT_ROW_PAGE;
    const arrPage = [];

    for (let idx = 0; idx < 10; idx++) {
        arrPage.push(
            {
                idx
            }
        );
    }

    return (
        <Pagination size="sm">

            <PaginationItem>
                <PaginationLink previous href="#"/>
            </PaginationItem>

            {
                arrPage.map(
                    item => (
                        <PaginationItem key={item.idx}>
                            <PaginationLink href="#">
                                {item.idx}
                            </PaginationLink>
                        </PaginationItem>
                    )
                )
            }

            <PaginationItem>
                <PaginationLink next href="#"/>
            </PaginationItem>

        </Pagination>
    )

}

export default connector(TablePagination);