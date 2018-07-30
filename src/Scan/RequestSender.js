import React from 'react';

import {connector} from "../store/utils/connector";
import {Col, Container, FormGroup, Input, Label, Row} from "reactstrap";

const RequestSender = ({state, dispatch}) =>
    (
        <div>
            <Container fluid={true}>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="senderCity">Город,страна:</Label>
                            <Input type="text"
                                   bsSize={'sm'}
                                   id="senderCity"
                                   placeholder="Город,страна"
                                   value={state.scanReducer.order.sender.city}
                                   onChange={(e) => {

                                   }}
                            />
                        </FormGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )

export default connector(RequestSender);