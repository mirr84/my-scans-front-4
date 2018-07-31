import React from 'react';

import {connector} from "../store/utils/connector";
import {Col, FormGroup, Input, Label, Row} from "reactstrap";

const Passport = ({state, dispatch, passport}) =>
    (
        <div>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="senderPassportSeries">Серия:</Label>
                        <Input placeholder="Серия"
                               bsSize={'sm'}
                               value={passport.fields.filter(item => item.alias === 'series')[0].value}
                               onChange={
                                   (e) => {
                                       passport.fields.filter(item => item.alias === 'series')[0].value = e.target.value;
                                       dispatch.changeSetPassport(passport);
                                   }
                               }
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="senderPassportNumber">Номер:</Label>
                        <Input placeholder="Номер"
                               bsSize={'sm'}
                               value={ passport.fields.filter( item => item.alias === 'number' )[0].value }
                               onChange={
                                   (e) => {
                                       passport.fields.filter(item => item.alias === 'number')[0].value = e.target.value;
                                       dispatch.changeSetPassport(passport);
                                   }
                               }
                        />
                    </FormGroup>
                </Col>
            </Row>
        </div>
    )

export default connector(Passport);