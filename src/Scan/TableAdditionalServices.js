import React, {Fragment} from 'react';

import {connector} from "../store/utils/connector";
import {Button, Col, FormGroup, Input, Label, Table} from "reactstrap";
import {getCalculationAndAdditionalServices} from "./serviceScan";

const TableAdditionalServices = ({state, dispatch}) =>
    (
        <div className={state.scanReducer.isProgressAdditionalServices ? 'div-load' : ''}>
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
                        (item, idx) => (
                            <tr key={idx}>
                                <td>
                                    {
                                        item.params && Array.isArray(item.params) && item.params.length > 0 ?
                                            (
                                                <div />
                                            )
                                            :
                                            <FormGroup check>
                                                <Input type="checkbox"
                                                       checked={item.select}
                                                       onChange={
                                                           () => {
                                                               item.select = !item.select;
                                                               getCalculationAndAdditionalServices({state, dispatch}, true);
                                                           }
                                                       }
                                                />
                                            </FormGroup>
                                    }
                                </td>
                                <td>{item.name}</td>
                                <td>
                                    {
                                        item.params && Array.isArray(item.params) && item.params.length > 0 ?
                                            (
                                                item.params.map(
                                                    (item1, idx1) => (
                                                        <FormGroup key={idx1} row style={ {'margin-bottom': '0px'} }>
                                                            <Label sm={5}>{item1.description}:</Label>
                                                            <Col sm={7}>
                                                                { item1.type }
                                                                <Input type="text"
                                                                       bsSize={'sm'}
                                                                       placeholder={item1.description}
                                                                       value={item1.value || ''}
                                                                       onChange={
                                                                           (e) => {
                                                                               item1.value = e.target.value? +e.target.value : null;
                                                                               dispatch.changeParamsAdditionalServicesInput(state.scanReducer.order.services.additionalServices);
                                                                           }
                                                                       }
                                                                       onBlur={
                                                                           () => {
                                                                               if ( item1.value && ('' + item1.value).trim() ) {
                                                                                   item.select = true;
                                                                               } else {
                                                                                   item.select = false;
                                                                               }
                                                                               getCalculationAndAdditionalServices({state, dispatch}, true);
                                                                           }
                                                                       }
                                                                />
                                                            </Col>
                                                        </FormGroup>
                                                    )
                                                )
                                            )
                                            :
                                            (
                                                <div/>
                                            )
                                    }
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </Table>
        </div>
    )

export default connector(TableAdditionalServices);
