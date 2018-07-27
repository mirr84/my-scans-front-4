import React from 'react';

import {connector} from "../store/utils/connector";
import {Container, Row, Col} from "reactstrap";

import RequestMain from "./RequestMain";
import RequestSender from "./RequestSender";
import RequestReceiver from "./RequestReceiver";
import RequestInformationAboutCargo from "./RequestInformationAboutCargo";
import RequestPaymentInformation from "./RequestPaymentInformation";
import RequestTotal from "./RequestTotal";
import RequestImage from "./RequestImage";

const Scan = ({state, dispatch}) =>
    (
        <Container fluid={true}>
            <Row>
                <Col>
                    <RequestMain />
                    <RequestPaymentInformation />
                    <RequestTotal />
                </Col>
                <Col>
                    <RequestSender />
                    <RequestReceiver />
                    <RequestInformationAboutCargo />
                </Col>
                <Col>
                    <div>
                        <RequestImage />
                    </div>
                </Col>
            </Row>
        </Container>
    )

export default connector(Scan);