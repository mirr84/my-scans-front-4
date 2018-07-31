import React from 'react';

import {connector} from "../store/utils/connector";
import {Col, Container, FormGroup, Label, Row} from "reactstrap";

import {AsyncCity} from "../AsyncTypeaheads/City";
import {AsyncContragent} from "../AsyncTypeaheads/Contragent";

const RequestSender = ({state, dispatch}) =>
    (
        <div>
            <Container fluid={true}>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="senderCity">Город,страна:</Label>
                            <AsyncCity props={{state, dispatch}}
                                       bsSize={'sm'}
                                       value={state.scanReducer.order.sender.city}
                                       onChange={
                                           (e) => {
                                               dispatch.changeOrderCitySenderInput(e);
                                               dispatch.changeOrderContragentSenderInput(null);
                                           }
                                       }
                                       placeholder={'Город отправителя'}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="senderContragent">Контрагент отправителя:</Label>
                            <AsyncContragent props={{state, dispatch}}
                                             bsSize={'sm'}
                                             disabled={
                                                 !state.scanReducer.order ||
                                                 !state.scanReducer.order.sender ||
                                                 !state.scanReducer.order.sender.city ||
                                                 !state.scanReducer.order.sender.city.code
                                             }
                                             dependency={state.scanReducer.order.sender.city}
                                             value={state.scanReducer.order.sender.contragent}
                                             onChange={
                                                 (e) => dispatch.changeOrderContragentSenderInput(e)
                                             }
                                             placeholder={'Контрагент отправителя'}
                            />
                        </FormGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )

export default connector(RequestSender);