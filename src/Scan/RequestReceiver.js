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
import {genPvzList, getCurrency, getServiceList} from "./serviceScan";
import StreetPanel from "./StreetPanel";
import {AsyncPvz, ListPvz} from "../AsyncTypeaheads/Pvz";

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
                                       onBlur={
                                           () => {
                                               getServiceList({state, dispatch});
                                               getCurrency({state, dispatch});
                                               genPvzList({state, dispatch});
                                               dispatch.changeOrderPvzInput(null);
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
                                                 (e) => {
                                                     dispatch.changeOrderContragentReceiverInput(e);
                                                 }
                                             }
                                             onBlur={
                                                 () => {
                                                     getServiceList({state, dispatch});
                                                     getCurrency({state, dispatch});
                                                 }
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
                    state.scanReducer.order.main.modeDelivery === '1' || state.scanReducer.order.main.modeDelivery === '3' ?
                        (
                            <StreetPanel />
                        )
                        :
                        (
                            <div/>
                        )
                }

                {
                    state.scanReducer.order.main.modeDelivery === '2' || state.scanReducer.order.main.modeDelivery === '4' ?
                        (
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="receiverPvz">ПВЗ:</Label>
                                        <ListPvz props={{state, dispatch}}
                                                         bsSize={'sm'}
                                                         disabled={
                                                             !state.scanReducer.order ||
                                                             !state.scanReducer.order.receiver ||
                                                             !state.scanReducer.order.receiver.city ||
                                                             !state.scanReducer.order.receiver.city.code
                                                         }
                                                         value={state.scanReducer.order.receiver.pvz}
                                                         onChange={
                                                             (e) => {
                                                                 dispatch.changeOrderPvzInput(e);
                                                             }
                                                         }
                                                         onBlur={
                                                             () => {
                                                                 getServiceList({state, dispatch});
                                                                 getCurrency({state, dispatch});
                                                             }
                                                         }
                                                         placeholder={'ПВЗ'}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                        )
                        :
                        (
                            <div/>
                        )
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
