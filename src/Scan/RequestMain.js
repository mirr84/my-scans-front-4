import React from 'react';

import {connector} from "../store/utils/connector";
import {Col, Container, FormGroup, Input, Label, Row} from "reactstrap";

import DatePicker from 'react-datepicker';
import moment from 'moment';

const RequestMain = ({state, dispatch}) =>
    (
        <Container fluid={true}>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="orderNumber">Номер заказа:</Label>
                        <Input type="text"
                               bsSize={'sm'}
                               id="orderNumber"
                               placeholder="Номер заказа"
                               value={state.scanReducer.order.main.orderNumber}
                               onChange={(e) => {}}
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="dateFrom">Дата заказа:</Label>
                        <DatePicker
                            id="dateFrom"
                            className="form-control"
                            dateFormat="DD.MM.YYYY"
                            readOnly={true}
                            selected={moment(state.scanReducer.order.main.date, 'DD.MM.YYYY')}
                            // onChange={(e) => dispatch.changeDateFromFilter(e.format('DD.MM.YYYY'))}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="orderType">Тип заказа:</Label>
                        <Input type="text"
                               bsSize={'sm'}
                               id="orderType"
                               placeholder="Тип заказа"
                               value={state.scanReducer.order.main.orderType}
                               onChange={(e) => {}}
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="modeDelivery">Режим:</Label>
                        <Input type="text"
                               bsSize={'sm'}
                               id="modeDelivery"
                               placeholder="Режим"
                               value={state.scanReducer.order.main.modeDelivery}
                               onChange={(e) => {}}
                        />
                    </FormGroup>
                </Col>
            </Row>
        </Container>
    )

export default connector(RequestMain);