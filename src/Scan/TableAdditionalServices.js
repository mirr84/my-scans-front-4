import React, {Fragment} from 'react';

import {connector} from "../store/utils/connector";
import {Col, FormGroup, Input, Label, Table} from "reactstrap";
import {getCalculationAndAdditionalServices} from "./serviceScan";
import CurrencyInput from 'react-currency-input';

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
                                        item.params && Array.isArray(item.params) && item.params.length > 0 && item.params.filter(item => item.type === 'list').length === 0 ?
                                            (
                                                <FormGroup check>
                                                    <Input type="checkbox"
                                                           disabled={true}
                                                           checked={item.select}
                                                           onChange={() => {
                                                           }}
                                                    />
                                                </FormGroup>
                                            )
                                            :
                                            (
                                                <FormGroup check>
                                                    <Input type="checkbox"
                                                           checked={item.select}
                                                           onChange={
                                                               () => {
                                                                   item.select = !item.select;
                                                                   if (item.params && Array.isArray(item.params) && item.params.filter( item1 => item1.type === 'list' ).length !== 0 ) {
                                                                       if (item.params[0].values && Array.isArray(item.params[0].values) && item.params[0].values.length > 0) {
                                                                           if (!item.params[0].value) {
                                                                               item.params[0].value = item.params[0].values[0].code;
                                                                               dispatch.changeParamsAdditionalServicesInput(state.scanReducer.order.services.additionalServices);
                                                                           }
                                                                       }
                                                                   }
                                                                   getCalculationAndAdditionalServices({
                                                                       state,
                                                                       dispatch
                                                                   }, true);
                                                               }
                                                           }
                                                    />
                                                </FormGroup>
                                            )
                                    }
                                </td>
                                <td>{item.name}</td>
                                <td>
                                    {
                                        item.params && Array.isArray(item.params) && item.params.length > 0 ?
                                            (
                                                item.params.map(
                                                    (item1, idx1) => (
                                                        <FormGroup key={idx1} row style={{'margin-bottom': '0px'}}>
                                                            <Label sm={5}>{item1.description}:</Label>
                                                            <Col sm={7}>
                                                                {
                                                                    item1.type === 'money' ? (
                                                                        <CurrencyInput
                                                                            decimalSeparator={','}
                                                                            thousandSeparator={''}
                                                                            precision={2}
                                                                            allowEmpty={true}
                                                                            // suffix=" rub"
                                                                            // prefix="$ "
                                                                            className={'form-control-sm form-control'}
                                                                            value={item1.value}
                                                                            onChangeEvent={
                                                                                (event, maskedvalue, floatvalue) => {
                                                                                    item1.value = floatvalue;
                                                                                    dispatch.changeParamsAdditionalServicesInput(state.scanReducer.order.services.additionalServices);
                                                                                }
                                                                            }
                                                                            onBlur={
                                                                                () => {
                                                                                    item.select = !!item1.value;
                                                                                    getCalculationAndAdditionalServices({
                                                                                        state,
                                                                                        dispatch
                                                                                    }, true);
                                                                                }
                                                                            }
                                                                        />
                                                                    ) : (<div/>)
                                                                }
                                                                {
                                                                    item1.type === 'integer' ? (
                                                                        <CurrencyInput
                                                                            decimalSeparator={','}
                                                                            thousandSeparator={''}
                                                                            precision={'0'}
                                                                            allowEmpty={true}
                                                                            // suffix=" rub"
                                                                            // prefix="$ "
                                                                            className={'form-control-sm form-control'}
                                                                            value={item1.value}
                                                                            onChangeEvent={
                                                                                (event, maskedvalue, floatvalue) => {
                                                                                    item1.value = floatvalue;
                                                                                    dispatch.changeParamsAdditionalServicesInput(state.scanReducer.order.services.additionalServices);
                                                                                }
                                                                            }
                                                                            onBlur={
                                                                                () => {
                                                                                    item.select = !!item1.value;
                                                                                    getCalculationAndAdditionalServices({
                                                                                        state,
                                                                                        dispatch
                                                                                    }, true);
                                                                                }
                                                                            }
                                                                        />
                                                                    ) : (<div/>)
                                                                }
                                                                {
                                                                    item1.type === 'string' ? (
                                                                        <Input type="text"
                                                                               bsSize={'sm'}
                                                                               placeholder={item1.description}
                                                                               value={item1.value || ''}
                                                                               onChange={
                                                                                   (e) => {
                                                                                       item1.value = e.target.value;
                                                                                       dispatch.changeParamsAdditionalServicesInput(state.scanReducer.order.services.additionalServices);
                                                                                   }
                                                                               }
                                                                               onBlur={
                                                                                   () => {
                                                                                       if (item1.value && ('' + item1.value).trim()) {
                                                                                           item.select = true;
                                                                                       } else {
                                                                                           item.select = false;
                                                                                       }
                                                                                       getCalculationAndAdditionalServices({
                                                                                           state,
                                                                                           dispatch
                                                                                       }, true);
                                                                                   }
                                                                               }
                                                                        />
                                                                    ) : (<div/>)
                                                                }
                                                                {
                                                                    item1.type === 'list' ? (
                                                                        <div>
                                                                            <Input bsSize={'sm'} type="select"
                                                                                   value={item1.value}
                                                                                   onChange={
                                                                                       (e) => {
                                                                                           item1.value = e.target.value;
                                                                                           dispatch.changeParamsAdditionalServicesInput(state.scanReducer.order.services.additionalServices);
                                                                                           getCalculationAndAdditionalServices({
                                                                                               state,
                                                                                               dispatch
                                                                                           }, true);
                                                                                       }
                                                                                   }
                                                                            >
                                                                                {
                                                                                    (item1.values || []).map(
                                                                                        (item, idx) => (
                                                                                            <option key={idx}
                                                                                                    value={item.code}>{item.name}</option>
                                                                                        )
                                                                                    )
                                                                                }
                                                                            </Input>
                                                                        </div>
                                                                    ) : (<div/>)
                                                                }
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
