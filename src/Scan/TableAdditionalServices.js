import React from 'react';

import {connector} from "../store/utils/connector";
import {Button, FormGroup, Input, Label, Table} from "reactstrap";

const TableAdditionalServices = ({state, dispatch}) =>
    (
        <div className={state.scanReducer.isProgressCalculationAndAdditionalServices?'div-load':''}>
            <Label>Дополнительные услуги</Label>
            <Table size="sm" hover striped>
                <thead>
                <tr>
                    <th></th>
                    <th>Наименование</th>
                    <th>Значение</th>
                </tr>
                </thead>
                <tbody>
                {
                    state.scanReducer.order.services.additionalServices.map(
                        (item,idx) => (
                            <tr key={idx} style={ {cursor: 'pointer'} }>
                                <td>
                                    <FormGroup check>
                                        <Input type="checkbox" checked={item.select} />
                                    </FormGroup>
                                </td>
                                <td>{item.name}</td>
                                <td>{JSON.stringify(item.params)}</td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </Table>
        </div>
    )

export default connector(TableAdditionalServices);