import React from 'react';

import {connector} from "../store/utils/connector";
import {Collapse, Card, CardBody, CardTitle, Container, Row, Col} from "reactstrap";
import RequestTable from "./RequestTable";
import RequestFilter from "./RequestFilter";
import RequestImage from "./RequestImage";

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
                        <Card>
                            <CardBody>
                                <RequestImage/>
                            </CardBody>
                        </Card>
                    </Col> : <div/>
                }

            </Row>

        </Container>
    )

export default connector(Journal);