import React from 'react';

import {connector} from "../store/utils/connector";
import {Table} from "reactstrap";
import {getImage} from "./serviceJournal";
import TablePagination from "./TablePagination";

const RequestTable = ({state, dispatch}) =>
    (
        <div>

            <div>
                <span> Заявок найдено: {state.journalReducer.data.foundCount | 0} </span>
                <div style={{float: 'right'}}>
                    {
                        state.journalReducer.data.foundCount ? <TablePagination/> : <div/>
                    }
                </div>
            </div>

            <Table size="sm" hover striped>
                <thead>
                <tr>
                    <th>№ заявки</th>
                    <th>Получатель</th>
                    <th>Курьер</th>
                    <th>Статус</th>
                    <th>Город курьера</th>
                    <th>Дата фото</th>
                    <th>Дата статуса</th>
                </tr>
                </thead>
                <tbody>

                {
                    state.journalReducer.data.items.map(
                        item => (
                            <tr key={item.code}
                                style={{cursor: 'pointer'}}
                                className={item.code === state.journalReducer.selectRowCode ? 'table-info' : ''}
                                onClick={
                                    () => {
                                        dispatch.changeSelectRowJournal(item.code);
                                        getImage(item.code, {state, dispatch});
                                    }
                                }
                            >
                                <td>{item.number}</td>
                                <td>{item.recipient}</td>
                                <td>{item.courier}</td>
                                <td>{item.status}</td>
                                <td>{item.courierCity}</td>
                                <td>{item.date}</td>
                                <td>{item.datetimeChangeStatus}</td>
                            </tr>
                        )
                    )
                }

                </tbody>
            </Table>

            <div>
                <div style={{float: 'right'}}>
                    {
                        state.journalReducer.data.foundCount ? <TablePagination/> : <div/>
                    }
                </div>
            </div>

        </div>
    )

export default connector(RequestTable);