import React from 'react';

import {connector} from "../store/utils/connector";
import {Col, Container, FormGroup, Label, Row} from "reactstrap";
import {AsyncCity} from "../AsyncTypeaheads/City";
import {AsyncContragent} from "../AsyncTypeaheads/Contragent";

const RequestReceiver = ({state, dispatch}) =>
    (
        <div>
            <Container fluid={true}>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="receiverCity">Город,страна:</Label>
                            <AsyncCity props={{state, dispatch}}
                                       bsSize={'sm'}
                                       value={state.scanReducer.order.receiver.city}
                                       onChange={
                                           (e) => {
                                               console.log(e);
                                               dispatch.changeOrderCityReceiverInput(e)
                                           }
                                       }
                                       placeholder={'Город получателя'}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="receiverContragent">Контрагент получателя:</Label>
                            <AsyncContragent props={{state, dispatch}}
                                             bsSize={'sm'}
                                             disabled={
                                                 !state.scanReducer.order ||
                                                 !state.scanReducer.order.receiver ||
                                                 !state.scanReducer.order.receiver.city ||
                                                 !state.scanReducer.order.receiver.city.code
                                             }
                                             dependency={state.scanReducer.order.receiver.city}
                                             value={state.scanReducer.order.receiver.contragent}
                                             onChange={
                                                 (e) => dispatch.changeOrderContragentReceiverInput(e)
                                             }
                                             placeholder={'Контрагент получателя'}
                            />
                        </FormGroup>
                    </Col>
                </Row>

            </Container>
        </div>
    )

export default connector(RequestReceiver);