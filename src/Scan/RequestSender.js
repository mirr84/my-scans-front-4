import React from 'react';

import {connector} from "../store/utils/connector";
import {
    Col,
    Container, DropdownItem,
    DropdownMenu,
    DropdownToggle,
    FormGroup, Input,
    InputGroup,
    InputGroupButtonDropdown,
    Label,
    Row
} from "reactstrap";

import {AsyncCity} from "../AsyncTypeaheads/City";
import {AsyncContragent} from "../AsyncTypeaheads/Contragent";
import TablePhones from "./TablePhones";

const RequestSender = ({state, dispatch}) =>
    (
        <div>
            <Container fluid={true}>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="senderCity">Город,страна:</Label>
                            <AsyncCity props={{state, dispatch}}
                                       bsSize={'sm'}
                                       value={state.scanReducer.order.sender.city}
                                       onChange={
                                           (e) => {
                                               dispatch.changeOrderCitySenderInput(e);
                                               dispatch.changeOrderContragentSenderInput(null);
                                           }
                                       }
                                       placeholder={'Город отправителя'}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="senderContragent">Контрагент отправителя:</Label>
                            <AsyncContragent props={{state, dispatch}}
                                             bsSize={'sm'}
                                             disabled={
                                                 !state.scanReducer.order ||
                                                 !state.scanReducer.order.sender ||
                                                 !state.scanReducer.order.sender.city ||
                                                 !state.scanReducer.order.sender.city.code
                                             }
                                             dependency={state.scanReducer.order.sender.city}
                                             value={state.scanReducer.order.sender.contragent}
                                             onChange={
                                                 (e) => dispatch.changeOrderContragentSenderInput(e)
                                             }
                                             placeholder={'Контрагент отправителя'}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="senderFio">ФИО:</Label>
                            <InputGroup size={'sm'}>
                                <InputGroupButtonDropdown addonType="prepend" isOpen={state.scanReducer.isOpenDropdownSenderFio}
                                                          toggle={()=>dispatch.changeIsOpenDropdownSenderFio(!state.scanReducer.isOpenDropdownSenderFio)}>
                                    <DropdownToggle split outline
                                                    disabled={
                                                        !(
                                                            state.scanReducer.order &&
                                                            state.scanReducer.order.sender &&
                                                            state.scanReducer.order.sender.contragent &&
                                                            Array.isArray(state.scanReducer.order.sender.contragent.contactPersons) &&
                                                            state.scanReducer.order.sender.contragent.contactPersons.length > 0
                                                        )
                                                    }
                                    />
                                    <DropdownMenu>
                                        {
                                            state.scanReducer.order &&
                                            state.scanReducer.order.sender &&
                                            state.scanReducer.order.sender.contragent &&
                                            Array.isArray(state.scanReducer.order.sender.contragent.contactPersons) &&
                                            state.scanReducer.order.sender.contragent.contactPersons.length > 0 &&
                                            state.scanReducer.order.sender.contragent.contactPersons.map(
                                                (item, idx) => (
                                                    <DropdownItem key={idx}
                                                                  onClick={() => dispatch.changeSenderFioInput(item.name)}>
                                                        {item.name}
                                                    </DropdownItem>
                                                )
                                            )
                                        }
                                    </DropdownMenu>
                                </InputGroupButtonDropdown>
                                <Input placeholder="ФИО отправителя"
                                       value={state.scanReducer.order.sender.contactPerson.name}
                                       onChange={(e) => dispatch.changeSenderFioInput(e.target.value)}
                                />
                            </InputGroup>
                        </FormGroup>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="senderPassportSeries">Серия:</Label>

                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="senderPassportNumber">Номер:</Label>

                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="senderPhones">Телефоны:</Label>
                            <TablePhones />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="senderZipCode">Индекс:</Label>

                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="senderAddress">Адрес:</Label>

                        </FormGroup>
                    </Col>
                </Row>
                {/*<Row>*/}
                    {/*<Col>*/}
                        {/*<FormGroup>*/}
                        {/*<Label for="senderEmail">Email:</Label>*/}

                        {/*</FormGroup>*/}
                    {/*</Col>*/}
                {/*</Row>*/}
            </Container>
        </div>
    )

export default connector(RequestSender);