import React from 'react';

import {connector} from "../store/utils/connector";
import {Col, FormGroup, Input, Label, Row} from "reactstrap";
import {AsyncContragent} from "../AsyncTypeaheads/Contragent";
import TableTariffs from "./TableTariffs";
import TableAdditionalServices from "./TableAdditionalServices";
import {getCurrency, getServiceList} from "./serviceScan";

const CASH = 'cash',
    AVANS = 'avans',
    SENDER = 'sender',
    RECEIVER = 'receiver',
    BT_CONTRACT = 'by_contract',
    OTHER = 'other';

const RequestPaymentInformation = ({state, dispatch}) =>
    (
        <div>
            <Row>
                <Col>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio"
                                   name="radio1"
                                   checked={state.scanReducer.order.payer.payType === CASH && state.scanReducer.order.payer.type === SENDER}
                                   onChange={() => {
                                       dispatch.changePayerPayType(CASH);
                                       dispatch.changePayerType(SENDER);
                                       getServiceList({state, dispatch});
                                       getCurrency({state, dispatch});
                                   }}
                            />{' '}Отправитель нал
                        </Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1"
                                   checked={state.scanReducer.order.payer.payType === AVANS && state.scanReducer.order.payer.type === SENDER}
                                   onChange={() => {
                                       dispatch.changePayerPayType(AVANS);
                                       dispatch.changePayerType(SENDER);
                                       getServiceList({state, dispatch});
                                       getCurrency({state, dispatch});
                                   }}
                            />{' '}Отправитель аванс
                        </Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1"
                                   checked={state.scanReducer.order.payer.payType === BT_CONTRACT && state.scanReducer.order.payer.type === OTHER}
                                   onChange={() => {
                                       dispatch.changePayerPayType(BT_CONTRACT);
                                       dispatch.changePayerType(OTHER);
                                       getServiceList({state, dispatch});
                                       getCurrency({state, dispatch});
                                   }}
                            />{' '}По договору
                        </Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1"
                                   checked={state.scanReducer.order.payer.payType === CASH && state.scanReducer.order.payer.type === RECEIVER}
                                   onChange={() => {
                                       dispatch.changePayerPayType(CASH);
                                       dispatch.changePayerType(RECEIVER);
                                       getServiceList({state, dispatch});
                                       getCurrency({state, dispatch});
                                   }}
                            />{' '}Получатель нал
                        </Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1"
                                   checked={state.scanReducer.order.payer.payType === AVANS && state.scanReducer.order.payer.type === RECEIVER}
                                   onChange={() => {
                                       dispatch.changePayerPayType(AVANS);
                                       dispatch.changePayerType(RECEIVER);
                                       getServiceList({state, dispatch});
                                       getCurrency({state, dispatch});
                                   }}
                            />{' '}Получатель аванс
                        </Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <AsyncContragent props={{state, dispatch}}
                                         bsSize={'sm'}
                                         disabled={!(state.scanReducer.order.payer.payType === BT_CONTRACT && state.scanReducer.order.payer.type === OTHER)}
                                         value={state.scanReducer.order.other.contragent}
                                         onChange={
                                             (e) => {
                                                 dispatch.changeOrderContragentOtherInput(e);
                                             }
                                         }
                                         onBlur={
                                             () => {
                                                 getServiceList({state, dispatch});
                                                 getCurrency({state, dispatch});
                                             }
                                         }
                                         placeholder={'Контрагент'}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TableTariffs/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TableAdditionalServices/>
                </Col>
            </Row>
        </div>
    )

export default connector(RequestPaymentInformation);