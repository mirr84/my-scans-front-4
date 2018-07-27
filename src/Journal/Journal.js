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
    Button,
    Modal,
    ModalBody,
    ListGroup,
    ListGroupItem, FormGroup, Label, Input, FormText
} from "reactstrap";
import Sticky from 'react-sticky-el';

import RequestTable from "./RequestTable";
import RequestFilter from "./RequestFilter";
import RequestImage from "./RequestImage";
import {getRephotoReasons, operationRephoto} from "./serviceJournal";

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
                                        .filter((item) => item.code === state.journalReducer.selectRowCode && item.status === STATUS_NOT_WORK)
                                        .length > 0 ?
                                        <Card>
                                            <CardBody>
                                                <Button color="success"
                                                        disabled={state.journalReducer.imageProgress}
                                                        onClick={() => {
                                                        }}
                                                >
                                                    Взять в обработку
                                                </Button>{' '}
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
                                            </CardBody>
                                        </Card> :
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

            <Modal isOpen={state.journalReducer.isShowModal}>
                <ModalBody>
                    <Card>
                        <CardBody>
                            <CardTitle>Причина возврата на перефото</CardTitle>

                            <ListGroup>
                                {
                                    state.journalReducer.reasonsList.map(
                                        item => (
                                            <ListGroupItem key={item.code}>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input checked={ state.journalReducer.selectReasonCode.filter( a => a === item.code ).length > 0 }
                                                               value={item.code}
                                                               onChange={ (e) => dispatch.changeReasonsItem(e.target.value) }
                                                               type="checkbox"/> {item.name}
                                                    </Label>
                                                </FormGroup>
                                            </ListGroupItem>
                                        )
                                    )
                                }
                                <ListGroupItem>
                                    <Label style={ {width: '100%'} }>
                                        Другая:
                                        <Input type="textarea"
                                               value={state.journalReducer.otherReason}
                                               onChange={ (e) => dispatch.changeOtherReason(e.target.value) }
                                        />
                                    </Label>
                                </ListGroupItem>
                            </ListGroup>

                            <br/>

                            <div style={{float: 'right'}}>
                                <Button color="success"
                                        disabled={ state.journalReducer.selectReasonCode.length === 0 && !state.journalReducer.otherReason }
                                        onClick={() => {
                                            operationRephoto({state, dispatch});
                                        }}>
                                    Отправить
                                </Button>
                                {' '}
                                <Button color="warning"
                                        onClick={() => dispatch.changeIsShowRePhotographedModal(false)}>
                                    Отмена
                                </Button>
                            </div>

                        </CardBody>
                    </Card>
                </ModalBody>
            </Modal>

        </Container>
    )

export default connector(Journal);