import React from 'react';

import {connector} from "../store/utils/connector";
import {FormGroup, Input, Label, Table} from "reactstrap";

const TableTariffs = ({state, dispatch}) =>
    (
        <div>
            <Label>Тарифы</Label>
            <Table size="sm" hover striped>
                <thead>
                <tr>
                    <th></th>
                    <th>Наименование</th>
                    <th>Срок доставки, дни</th>
                    <th>Цена</th>
                </tr>
                </thead>
                <tbody>
                {
                    (state.scanReducer.order.services.tariffs || [])
                        .map((item, idx) => (
                                !item.deleted ?
                                    (
                                        <tr key={idx} style={{cursor: 'pointer'}}
                                            onClick={
                                                () => {
                                                    state.scanReducer.order.services.tariffs
                                                        .map(item1 => {
                                                            item1.select = false;
                                                            return item1;
                                                        })
                                                        .filter(item1 => item1.code === item.code)[0].select = true;
                                                    dispatch.changeSetOrderData(state.scanReducer.order);
                                                }
                                            }
                                        >
                                            <td>
                                                <FormGroup check>
                                                    <Input type="radio"
                                                           checked={item.select}
                                                           name="radioTariffs"/>
                                                </FormGroup>
                                            </td>
                                            <td>{item.name}</td>
                                            <td>
                                                {item.deliveryTime ? item.deliveryTime : ((item.forecastFrom?item.forecastFrom:'') + (item.forecastTo?('-' + item.forecastTo):''))}
                                            </td>
                                            <td>{item.price}</td>
                                        </tr>
                                    ) : (
                                        <tr>
                                            <td></td>
                                            <td>
                                                <FormGroup check>
                                                    <Input type="radio"
                                                           checked={item.select}
                                                           name="radioTariffs"/>
                                                </FormGroup>
                                            </td>
                                            <td>{item.name}</td>
                                            <td>
                                                {item.deliveryTime ? item.deliveryTime : item.forecastFrom + '-' + item.forecastTo}
                                            </td>
                                            <td>{item.price}</td>
                                        </tr>
                                    )
                            )
                        )
                }
                </tbody>
            </Table>
        </div>
    )

export default connector(TableTariffs);