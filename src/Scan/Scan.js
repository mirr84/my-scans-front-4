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
import Sticky from 'react-sticky-el';
import {getTaskAndLock, getTaskByKey} from "./serviceScan";

const Scan = ({state, dispatch}) =>
    (
        <Container fluid={true}>
            <Row>
                <Col>
                    <RequestMain/>
                    <RequestPaymentInformation/>
                    <RequestTotal/>
                </Col>
                <Col>
                    <RequestSender/>
                    <RequestReceiver/>
                    <RequestInformationAboutCargo/>
                </Col>
                <Col>
                    <Sticky>
                        <div>
                            <div>
                                <Card>
                                    <CardBody>
                                        {
                                            !state.scanReducer.isGetOrderFromWork ? (
                                                <Button color="success"
                                                        onClick={() => getTaskAndLock({state, dispatch})}
                                                >
                                                    Автоматический внос
                                                </Button>
                                            ) : (
                                                <div>
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
                                                            onClick={() => dispatch.changeIsStopGetOrderFromWorkModal(true)}
                                                    >
                                                        Стоп
                                                    </Button>
                                                </div>
                                            )
                                        }
                                    </CardBody>
                                </Card>
                            </div>
                            <div>
                                <RequestImage/>
                            </div>
                        </div>
                    </Sticky>
                </Col>
            </Row>
        </Container>
    )

export default connector(Scan);