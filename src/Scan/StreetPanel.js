import React from 'react';

import {connector} from "../store/utils/connector";
import {Col, FormGroup, Input, Label, Row} from "reactstrap";

const StreetPanel = ({state, dispatch, order, contragent}) =>
    (
        <Row>
            <Col xl={3}>
                <FormGroup>
                    <Label for="senderZipCode">Индекс:</Label>
                    <Input placeholder="Индекс"
                           bsSize={'sm'}
                           value={order[contragent].contactPerson.address.zipCode}
                           onChange={
                               (e) => {
                                   order[contragent].contactPerson.address.zipCode = e.target.value;
                                   dispatch.changeAddressInput();
                               }
                           }
                    />
                </FormGroup>
            </Col>
            <Col xl={9}>
                <FormGroup>
                    <Label for="senderAddress">Адрес:</Label>

                    {/*{*/}
                        {/*JSON.stringify( order[contragent].contactPerson.address )*/}
                    {/*}*/}

                    <Row>
                        <Col xl={5}>Улица:</Col>
                        <Col>
                            <Input placeholder="Улица"
                                   bsSize={'sm'}
                                   value={order[contragent].contactPerson.address.street}
                                   onChange={
                                       (e) => {
                                           order[contragent].contactPerson.address.street = e.target.value;
                                           dispatch.changeAddressInput();
                                       }
                                   }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={5}>Дом:</Col>
                        <Col>
                            <Input placeholder="Дом"
                                   bsSize={'sm'}
                                   value={order[contragent].contactPerson.address.house}
                                   onChange={
                                       (e) => {
                                           order[contragent].contactPerson.address.house = e.target.value;
                                           dispatch.changeAddressInput();
                                       }
                                   }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={5}>Квартира/офис:</Col>
                        <Col>
                            <Input placeholder="Квартира/офис"
                                   bsSize={'sm'}
                                   value={order[contragent].contactPerson.address.flat}
                                   onChange={
                                       (e) => {
                                           order[contragent].contactPerson.address.flat = e.target.value;
                                           dispatch.changeAddressInput();
                                       }
                                   }
                            />
                        </Col>
                    </Row>

                </FormGroup>
            </Col>
        </Row>
    )

export default connector(StreetPanel);
