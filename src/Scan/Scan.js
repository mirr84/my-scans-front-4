import React from 'react';

import {connector} from "../store/utils/connector";
import {Container, Row, Col, Card, CardBody, Button, Collapse, CardTitle} from "reactstrap";

import RequestMain from "./RequestMain";
import RequestSender from "./RequestSender";
import RequestReceiver from "./RequestReceiver";
import RequestInformationAboutCargo from "./RequestInformationAboutCargo";
import RequestPaymentInformation from "./RequestPaymentInformation";
import RequestTotal from "./RequestTotal";
import RequestImage from "./RequestImage";
import {getRephotoReasons} from "../Journal/serviceJournal";
import Sticky from 'react-sticky-el';
import {getTaskAndLock} from "./serviceScan";

const Scan = ({state, dispatch}) =>
    (
        <Container fluid={true}>

            {/*<div>*/}
            {/*{*/}
                {/*JSON.stringify( state.scanReducer.order )*/}
            {/*}*/}
            {/*</div>*/}

            <Row>
                <Col>

                    <Card>
                        <CardBody>
                            <CardTitle
                                style={{margin: 0, cursor: 'pointer'}}
                                onClick={() => dispatch.changeScanMainCollapse(!state.scanReducer.mainCollapse)}>
                                Главная
                            </CardTitle>
                            <Collapse isOpen={state.scanReducer.mainCollapse}>
                                <RequestMain/>
                            </Collapse>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <CardTitle
                                style={{margin: 0, cursor: 'pointer'}}
                                onClick={() => dispatch.changeInformationAboutCargoCollapse(!state.scanReducer.informationAboutCargoCollapse)}>
                                Информация о грузе
                            </CardTitle>
                            <Collapse isOpen={state.scanReducer.informationAboutCargoCollapse}>
                                <RequestInformationAboutCargo/>
                            </Collapse>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <CardTitle
                                style={{margin: 0, cursor: 'pointer'}}
                                onClick={() => dispatch.changePaymentInformationCollapse(!state.scanReducer.paymentInformationCollapse)}>
                                Информация об оплате
                            </CardTitle>
                            <Collapse isOpen={state.scanReducer.paymentInformationCollapse}>
                                <RequestPaymentInformation/>
                            </Collapse>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <CardTitle
                                style={{margin: 0, cursor: 'pointer'}}
                                onClick={() => dispatch.changeTotalCollapse(!state.scanReducer.totalCollapse)}>
                                Итого
                            </CardTitle>
                            <Collapse isOpen={state.scanReducer.totalCollapse}>
                                <RequestTotal/>
                            </Collapse>
                        </CardBody>
                    </Card>

                </Col>
                <Col>

                    <Card>
                        <CardBody>
                            <CardTitle
                                style={{margin: 0, cursor: 'pointer'}}
                                onClick={() => dispatch.changeSenderCollapse(!state.scanReducer.senderCollapse)}>
                                Отправитель
                            </CardTitle>
                            <Collapse isOpen={state.scanReducer.senderCollapse}>
                                <RequestSender/>
                            </Collapse>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <CardTitle
                                style={{margin: 0, cursor: 'pointer'}}
                                onClick={() => dispatch.changeReceiverCollapse(!state.scanReducer.receiverCollapse)}>
                                Получатель
                            </CardTitle>
                            <Collapse isOpen={state.scanReducer.receiverCollapse}>
                                <RequestReceiver/>
                            </Collapse>
                        </CardBody>
                    </Card>

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
                                                        size={'sm'}
                                                        onClick={() => getTaskAndLock({state, dispatch})}
                                                >
                                                    Автоматический внос
                                                </Button>
                                            ) : (
                                                <div>
                                                    <Button color="warning"
                                                            size={'sm'}
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
                                                            size={'sm'}
                                                            onClick={() => dispatch.changeIsStopGetOrderFromWorkModal(true)}
                                                    >
                                                        Стоп
                                                    </Button>
                                                    <Button color="info"
                                                            style = { { float: 'right' } }
                                                            size={'sm'}
                                                            onClick={() => {}}
                                                    >
                                                        Время на внос: { state.scanReducer.timeout }
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