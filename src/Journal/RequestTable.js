import React from 'react';

import {connector} from "../store/utils/connector";
import {Button, Table} from "reactstrap";
import {doFilter, getImage, LIMIT_ROW_PAGE} from "./serviceJournal";

const RequestTable = ({state, dispatch}) =>
    (
        <div>

            {
                state.journalReducer.data.foundCount ?
                    <div><span> Заявок найдено: {state.journalReducer.data.foundCount} </span></div> : <div/>
            }

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

                {
                    state.journalReducer.data.items.length < state.journalReducer.data.foundCount ?
                        <tr>
                            <td colSpan={7}>
                                <Button style={{width: '100%'}}
                                        size={'sm'}
                                        disabled={ state.journalReducer.isProgressFilter }
                                        onClick={() =>
                                            doFilter({
                                                state,
                                                dispatch
                                            }, false, state.journalReducer.data.items.length + LIMIT_ROW_PAGE > state.journalReducer.data.foundCount ? state.journalReducer.data.foundCount : state.journalReducer.data.items.length + LIMIT_ROW_PAGE)}
                                >
                                    Получить данные
                                    ({state.journalReducer.data.items.length}-{state.journalReducer.data.items.length + LIMIT_ROW_PAGE > state.journalReducer.data.foundCount ? state.journalReducer.data.foundCount : state.journalReducer.data.items.length + LIMIT_ROW_PAGE})
                                </Button>
                            </td>
                        </tr> : <tr></tr>
                }

                </tbody>
            </Table>

        </div>
    )

export default connector(RequestTable);