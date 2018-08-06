import React from 'react';

import {connector} from "../store/utils/connector";
import {Col, FormGroup, Label, Row} from "reactstrap";

const StreetPanel = ({state, dispatch}) =>
    (
        <Row>
            <Col xl={3}>
                <FormGroup>
                    <Label for="senderZipCode">Индекс:</Label>

                </FormGroup>
            </Col>
            <Col xl={9}>
                <FormGroup>
                    <Label for="senderAddress">Адрес:</Label>

                </FormGroup>
            </Col>
        </Row>
    )

export default connector(StreetPanel);
