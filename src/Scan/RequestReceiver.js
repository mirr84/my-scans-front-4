import React from 'react';

import {connector} from "../store/utils/connector";
import {Col, Container, FormGroup, Label, Row, DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    InputGroup,
    InputGroupButtonDropdown} from "reactstrap";
import {AsyncCity} from "../AsyncTypeaheads/City";
import {AsyncContragent} from "../AsyncTypeaheads/Contragent";

const RequestReceiver = ({state, dispatch}) =>
    (
        <div>
            <Container fluid={true}>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="receiverCity">Город,страна:</Label>
                            <AsyncCity props={{state, dispatch}}
                                       bsSize={'sm'}
                                       value={state.scanReducer.order.receiver.city}
                                       onChange={
                                           (e) => {
                                               console.log(e);
                                               dispatch.changeOrderCityReceiverInput(e)
                                           }
                                       }
                                       placeholder={'Город получателя'}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="receiverContragent">Контрагент получателя:</Label>
                            <AsyncContragent props={{state, dispatch}}
                                             bsSize={'sm'}
                                             disabled={
                                                 !state.scanReducer.order ||
                                                 !state.scanReducer.order.receiver ||
                                                 !state.scanReducer.order.receiver.city ||
                                                 !state.scanReducer.order.receiver.city.code
                                             }
                                             dependency={state.scanReducer.order.receiver.city}
                                             value={state.scanReducer.order.receiver.contragent}
                                             onChange={
                                                 (e) => dispatch.changeOrderContragentReceiverInput(e)
                                             }
                                             placeholder={'Контрагент получателя'}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="receiverFio">ФИО:</Label>
                            <InputGroup size={'sm'}>
                                <InputGroupButtonDropdown addonType="prepend" isOpen={state.scanReducer.isOpenDropdownReceiverFio}
                                                          toggle={()=>dispatch.changeIsOpenDropdownReceiverFio(!state.scanReducer.isOpenDropdownReceiverFio)}>
                                    <DropdownToggle split outline
                                                    disabled={
                                                        !(
                                                            state.scanReducer.order &&
                                                            state.scanReducer.order.receiver &&
                                                            state.scanReducer.order.receiver.contragent &&
                                                            Array.isArray(state.scanReducer.order.receiver.contragent.contactPersons) &&
                                                            state.scanReducer.order.receiver.contragent.contactPersons.length > 0
                                                        )
                                                    }
                                    />
                                    <DropdownMenu>
                                        {
                                            state.scanReducer.order &&
                                            state.scanReducer.order.receiver &&
                                            state.scanReducer.order.receiver.contragent &&
                                            Array.isArray(state.scanReducer.order.receiver.contragent.contactPersons) &&
                                            state.scanReducer.order.receiver.contragent.contactPersons.length > 0 &&
                                            state.scanReducer.order.receiver.contragent.contactPersons.map(
                                                (item, idx) => (
                                                    <DropdownItem key={idx}>{item.name}</DropdownItem>
                                                )
                                            )
                                        }
                                    </DropdownMenu>
                                </InputGroupButtonDropdown>
                                <Input placeholder="ФИО получателя" />
                            </InputGroup>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="receiverPhones">Телефоны:</Label>

                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="receiverAddress">Адрес:</Label>

                        </FormGroup>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="receiverPassportSeries">Серия:</Label>

                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="receiverPassportNumber">Номер:</Label>

                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="receiverZipCode">Индекс:</Label>

                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                        <Label for="receiverEmail">Email:</Label>

                        </FormGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )

export default connector(RequestReceiver);