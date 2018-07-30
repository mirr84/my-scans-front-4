import React from 'react';

import {connector} from "../store/utils/connector";
import {Col, Container, FormGroup, Input, Label, Row} from "reactstrap";

import {AsyncCity} from "../AsyncTypeaheads/City";

const RequestSender = ({state, dispatch}) =>
    (
        <div>
            <Container fluid={true}>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="senderCity">Город,страна:</Label>
                            <AsyncCity props={{state, dispatch}}

                            />
                        </FormGroup>
                    </Col>
                </Row>



            </Container>
        </div>
    )

export default connector(RequestSender);