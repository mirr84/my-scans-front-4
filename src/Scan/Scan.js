import React from 'react';

import {connector} from "../store/utils/connector";
import {Container, Row, Col, Card, CardBody, Button} from "reactstrap";

import RequestMain from "./RequestMain";
import RequestSender from "./RequestSender";
import RequestReceiver from "./RequestReceiver";
import RequestInformationAboutCargo from "./RequestInformationAboutCargo";
import RequestPaymentInformation from "./RequestPaymentInformation";
import RequestTotal from "./RequestTotal";
import RequestImage from "./RequestImage";
import {getRephotoReasons} from "../Journal/serviceJournal";

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
                        <div>
                            <Card>
                                <CardBody>
                                    <Button color="success"
                                            onClick={() => {}}
                                    >
                                        Автоматический внос
                                    </Button>
                                    {' '}
                                    <Button color="warning"
                                            disabled={state.journalReducer.imageProgress}
                                            onClick={
                                                () => {
                                                    dispatch.changeIsShowRePhotographedModal(true);
                                                    dispatch.changeCleanRephotoReasons(true);
                                                    getRephotoReasons({state, dispatch});
                                                }
                                            }
                                    >
                                        Возврат на перефото
                                    </Button>
                                    {' '}
                                    <Button color="warning"
                                            onClick={() => {}}
                                    >
                                        Стоп
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                        <RequestImage />
                    </div>
                </Col>
            </Row>
        </Container>
    )

export default connector(Scan);