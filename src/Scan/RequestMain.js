import React from 'react';

import {connector} from "../store/utils/connector";
import {Button, Col, Container, FormGroup, Input, InputGroup, InputGroupAddon, Label, Row} from "reactstrap";

import DatePicker from 'react-datepicker';
import moment from 'moment';
import {getServiceList, isExistsOrderNumber, operationLinkFirstWithOrder} from "./serviceScan";
import {FaHandPointer, FaClock} from 'react-icons/fa';

const RequestMain = ({state, dispatch}) =>
    (
        <Container fluid={true}>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="orderNumber">Номер заказа:</Label>
                        <InputGroup>

                            <Input type="text"
                                   bsSize={'sm'}
                                   id="orderNumber"
                                   placeholder="Номер заказа"
                                   value={state.scanReducer.order.main.orderNumber}
                                   onChange={(e) => {
                                       dispatch.changeScanOrderNumberInput(e.target.value);
                                       isExistsOrderNumber({state, dispatch})
                                   }}
                            />
                            {
                                state.scanReducer.order.main.request ?
                                    <Button color="secondary"
                                            disabled={
                                                !state.scanReducer.order.main.orderNumber ||
                                                ('' + state.scanReducer.order.main.orderNumber).length < 7 ||
                                                ('' + state.scanReducer.order.main.orderNumber).length > 11 ||
                                                !state.scanReducer.isExistsOrderNumber
                                            }
                                            onClick={
                                                () => operationLinkFirstWithOrder({state, dispatch})
                                            }
                                            size={'sm'}>
                                        {
                                            state.scanReducer.isProgressIsExistsOrderNumber ? <FaClock/> : <FaHandPointer/>
                                        }
                                    </Button>
                                    :
                                    <div></div>
                            }

                        </InputGroup>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="dateFrom">Дата заказа:</Label>
                        <DatePicker
                            id="dateFrom"
                            className="form-control form-control-sm width-100"
                            dateFormat="DD.MM.YYYY"
                            readOnly={true}
                            selected={moment(state.scanReducer.order.main.date , 'DD.MM.YYYY')}
                            onChange={
                                (e) => {
                                    dispatch.changeScanDateInput(e.format('DD.MM.YYYY'));
                                    getServiceList({state, dispatch});
                                }
                            }
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="orderType">Тип заказа:</Label>
                        <Input bsSize={'sm'}
                               type="select"
                               id="orderType"
                               value={state.scanReducer.order.main.orderType}
                               onChange={(e) => {
                                   dispatch.changeScanOrderTypeInput(e.target.value);
                               }}
                        >
                            <option value={1}>Доставка</option>
                            <option value={5}>Интернет-магазин</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="modeDelivery">Режим:</Label>
                        <Input bsSize={'sm'}
                               type="select"
                               id="modeDelivery"
                               value={state.scanReducer.order.main.modeDelivery}
                               onChange={(e) => {
                                   dispatch.changeScanOrderModeDeliveryInput(e.target.value);
                                   getServiceList({state, dispatch});
                               }}
                            // onBlur={
                            //     () => {
                            //         getServiceList({state, dispatch});
                            //     }
                            // }
                        >
                            <option value={1}>дверь-дверь</option>
                            <option value={2}>дверь-склад</option>
                            <option value={3}>склад-дверь</option>
                            <option value={4}>склад-склад</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
        </Container>
    )

export default connector(RequestMain);
