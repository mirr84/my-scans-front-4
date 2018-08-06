import React from 'react';

import {connector} from "../store/utils/connector";
import {
    Collapse,
    Card,
    CardBody,
    CardTitle,
    Container,
    Row,
    Col,
    Button
} from "reactstrap";
import Sticky from 'react-sticky-el';

import RequestTable from "./RequestTable";
import RequestFilter from "./RequestFilter";
import RequestImage from "./RequestImage";
import {getRephotoReasons} from "./serviceJournal";
import {getTaskByKey} from "../Scan/serviceScan";

const STATUS_NOT_WORK = 'Не обработано';

const Journal = ({state, dispatch}) =>
    (
        <Container fluid={true}>

            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle
                                style={{margin: 0, cursor: 'pointer'}}
                                onClick={() => dispatch.changeJournalFilterCollapse(!state.journalReducer.collapse)}>
                                Фильтр
                            </CardTitle>
                            <Collapse isOpen={state.journalReducer.collapse}>
                                <RequestFilter/>
                            </Collapse>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={state.journalReducer.selectRowCode ? 8 : 12}>
                    <Card>
                        <CardBody style={{overflow: 'auto'}}>
                            <RequestTable/>
                        </CardBody>
                    </Card>
                </Col>
                {
                    state.journalReducer.selectRowCode ? <Col xl={4}>
                        <Sticky>
                            <div>

                                {
                                    state.journalReducer.data.items
                                        .filter((item) => item.code === state.journalReducer.selectRowCode && item.status === STATUS_NOT_WORK)
                                        .length > 0 ?
                                        <Card>
                                            <CardBody>
                                                <Button color="success"
                                                        size={'sm'}
                                                        disabled={state.journalReducer.imageProgress}
                                                        onClick={() => {
                                                            getTaskByKey({state, dispatch});
                                                        }}
                                                >
                                                    Взять в обработку
                                                </Button>{' '}
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
                                            </CardBody>
                                        </Card> :
                                        <div></div>
                                }

                                <RequestImage/>
                            </div>
                        </Sticky>
                    </Col> : <div/>
                }

            </Row>

        </Container>
    )

export default connector(Journal);
