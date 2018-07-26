import React from 'react';

import {connector} from "../store/utils/connector";
import {Collapse, Card, CardBody, CardTitle, Container, Row, Col, Button} from "reactstrap";
import Sticky from 'react-sticky-el';

import RequestTable from "./RequestTable";
import RequestFilter from "./RequestFilter";
import RequestImage from "./RequestImage";

const STATUS_NOT_WORK = 'Не обработано';

const Journal = ({state, dispatch}) =>
    (
        <Container fluid={true}>

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
                                        .filter( (item) => item.code === state.journalReducer.selectRowCode && item.status === STATUS_NOT_WORK )
                                        .length > 0 ?
                                        <Card>
                                            <CardBody>
                                                <Button color="success">Взять в обработку</Button>{' '}
                                                <Button color="warning">Возврат на перефото</Button>{' '}
                                            </CardBody>
                                        </Card>:
                                        <div></div>
                                }

                                <Card>
                                    <CardBody>
                                        <RequestImage/>
                                    </CardBody>
                                </Card>
                            </div>
                        </Sticky>
                    </Col> : <div/>
                }

            </Row>

        </Container>
    )

export default connector(Journal);