import React from 'react';

import {connector} from "../store/utils/connector";
import {
    Col, Container, FormGroup, Label, Row, DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    InputGroup,
    InputGroupButtonDropdown, Alert
} from "reactstrap";
import {AsyncCity} from "../AsyncTypeaheads/City";
import {AsyncContragent} from "../AsyncTypeaheads/Contragent";
import TablePhones from "./TablePhones";
import Passport from "./Passport";

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
                                               dispatch.changeOrderCityReceiverInput(e)
                                               dispatch.changeOrderContragentReceiverInput(null);
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
                                <InputGroupButtonDropdown addonType="prepend"
                                                          isOpen={state.scanReducer.isOpenDropdownReceiverFio}
                                                          toggle={() => dispatch.changeIsOpenDropdownReceiverFio(!state.scanReducer.isOpenDropdownReceiverFio)}>
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
                                                    <DropdownItem key={idx}
                                                                  onClick={
                                                                      () => {
                                                                          dispatch.changeReceiverFioInput(item.name);
                                                                          dispatch.changeSetPassport(state.scanReducer.order.receiver.contactPerson.passport = item.passport);
                                                                      }
                                                                  }>
                                                        {item.name}
                                                    </DropdownItem>
                                                )
                                            )
                                        }
                                    </DropdownMenu>
                                </InputGroupButtonDropdown>
                                <Input placeholder="ФИО получателя"
                                       value={state.scanReducer.order.receiver.contactPerson.name}
                                       onChange={(e) => dispatch.changeReceiverFioInput(e.target.value)}
                                />
                            </InputGroup>
                        </FormGroup>
                    </Col>
                    <Col>
                        <Passport passport={state.scanReducer.order.receiver.contactPerson.passport} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="receiverPhones">Телефоны:</Label>
                            <TablePhones phones={state.scanReducer.order.receiver.phones}/>
                        </FormGroup>
                    </Col>
                </Row>

                {
                    state.scanReducer.order.main.modeDelivery === '1' || state.scanReducer.order.main.modeDelivery === '3' ? (
                            <Row>
                                <Col xl={3}>
                                    <FormGroup>
                                        <Label for="receiverZipCode">Индекс:</Label>

                                    </FormGroup>
                                </Col>
                                <Col xl={9}>
                                    <FormGroup>
                                        <Label for="receiverAddress">Адрес:</Label>

                                    </FormGroup>
                                </Col>
                            </Row>
                        )
                        :
                        (<div></div>)
                }

                {
                    state.scanReducer.order.main.modeDelivery === '2' || state.scanReducer.order.main.modeDelivery === '4' ? (
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="receiverPvz">ПВЗ:</Label>

                                    </FormGroup>
                                </Col>
                            </Row>
                        )
                        :
                        (<div></div>)
                }

                {
                    state.scanReducer.order.main.modeDelivery !== '1' ||
                    state.scanReducer.order.main.modeDelivery !== '2' ||
                    state.scanReducer.order.main.modeDelivery !== '3' ||
                    state.scanReducer.order.main.modeDelivery !== '4'
                        ? (
                            <div></div>
                        )
                        :
                        (
                            <Row>
                                <Col>
                                    <Alert color="warning">
                                        Не определен Режим для отпределения вида адреса
                                    </Alert>
                                </Col>
                            </Row>
                        )
                }

                <Row>
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