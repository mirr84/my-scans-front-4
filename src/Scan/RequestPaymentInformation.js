import React from 'react';

import {connector} from "../store/utils/connector";
import {Col, FormGroup, Input, Label, Row} from "reactstrap";
import {AsyncContragent} from "../AsyncTypeaheads/Contragent";

const RequestPaymentInformation = ({state, dispatch}) =>
    (
        <div>
            <Row>
                <Col>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio"
                                   name="radio1"

                            />{' '}Отправитель нал
                        </Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}Отправитель аванс
                        </Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}По договору
                        </Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}Получатель нал
                        </Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}Получатель аванс
                        </Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <AsyncContragent props={{state, dispatch}}
                                         bsSize={'sm'}
                                         disabled={false}
                                         value={state.scanReducer.order.other.contragent}
                                         onChange={
                                             (e) => dispatch.changeOrderContragentOtherInput(e)
                                         }
                                         placeholder={'Контрагент'}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    Tariffs
                </Col>
            </Row>
            <Row>
                <Col>
                    addServ
                </Col>
            </Row>
        </div>
    )

export default connector(RequestPaymentInformation);