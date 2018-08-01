import React from 'react';

import {connector} from "../store/utils/connector";
import {Button, Row, Col, Label, FormGroup, Input} from "reactstrap";
import {doFilter, getStatusList} from "./serviceJournal";

import Select from 'react-select';
import lifecycle from "react-pure-lifecycle";

import DatePicker from 'react-datepicker';
import moment from 'moment';
import {AsyncCity} from "../AsyncTypeaheads/City";
import {AsyncCourier} from "../AsyncTypeaheads/Courier";

let a = [{label: '111', value: 'in_progress'}, {label: '222', value: 'not_treated'}];

const methods = {
    componentDidMount(props) {
        if (props.state.journalReducer.statusList.length === 0)
            getStatusList(props);
    }
}


const RequestFilter = ({state, dispatch}) =>
    (
        <div>
            <Row>
                <Col xl={10}>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="status">Статус заявки:</Label>
                                <Select
                                    id="status"
                                    isDisabled ={state.journalReducer.number.trim()}
                                    placeholder={'Статус заявки'}
                                    value={state.journalReducer.selectStatus}
                                    isMulti={true}
                                    isSearchable={false}
                                    // menuIsOpen={true}
                                    onChange={(e) => dispatch.changeSelectStatus(e)}
                                    options={state.journalReducer.statusList.map(item => ({
                                        value: item.code,
                                        label: item.name
                                    }))}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="courierCity">Город курьера:</Label>
                                <AsyncCity props={{state, dispatch}}
                                           value={state.journalReducer.courierCity}
                                           disabled={state.journalReducer.number.trim()}
                                           onChange={
                                               (e) => {
                                                   dispatch.changeJournalCourierCityInput(e);
                                                   dispatch.changeJournalCourierInput(null);
                                               }
                                           }
                                           placeholder={'Город курьера'}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="dateFrom">Дата фото с:</Label>
                                <DatePicker
                                    id="dateFrom"
                                    className="form-control"
                                    dateFormat="DD.MM.YYYY"
                                    readOnly={true}
                                    disabled={state.journalReducer.number.trim()}
                                    maxDate={moment(state.journalReducer.dateTo, 'DD.MM.YYYY')}
                                    selected={moment(state.journalReducer.dateFrom, 'DD.MM.YYYY')}
                                    onChange={(e) => dispatch.changeDateFromFilter(e.format('DD.MM.YYYY'))}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="dateTo">Дата фото по:</Label>
                                <DatePicker
                                    id="dateTo"
                                    className="form-control"
                                    dateFormat="DD.MM.YYYY"
                                    readOnly={true}
                                    disabled={state.journalReducer.number.trim()}
                                    minDate={moment(state.journalReducer.dateFrom, 'DD.MM.YYYY')}
                                    selected={moment(state.journalReducer.dateTo, 'DD.MM.YYYY')}
                                    onChange={(e) => dispatch.changeDateToFilter(e.format('DD.MM.YYYY'))}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="number"><i>Номер заявки</i>:</Label>
                                <Input type="text"
                                       id="number"
                                       placeholder="Номер заявки"
                                       value={state.journalReducer.number}
                                       onChange={(e) => {
                                           dispatch.changeJournalOrderNumberInput(e.target.value)
                                       }}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="courier">ФИО Курьера:</Label>
                                <AsyncCourier props={{state, dispatch}}
                                              disabled={
                                                  !state.journalReducer.courierCity || state.journalReducer.number.trim()
                                              }
                                              dependency={state.journalReducer.courierCity}
                                              value={state.journalReducer.courier}
                                              onChange={
                                                  (e) => dispatch.changeJournalCourierInput(e)
                                              }
                                              placeholder={'ФИО Курьера'}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup check>
                                <Label check>
                                    <br/>
                                    <Input type="checkbox"
                                           checked={state.journalReducer.onlyUrgent}
                                           onChange={ (e) => dispatch.changeJournalOnlyUrgentInput(e.target.checked) }
                                    />{' '}Только срочные
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col/>
                    </Row>
                </Col>
                <Col xl={2}>
                    <Button color="success"
                            disabled={state.journalReducer.isProgressFilter}
                            onClick={
                                () => {
                                    // очищаем журнал

                                    // лочим форму

                                    // делаем запрос
                                    doFilter({state, dispatch});
                                }
                            }
                    >
                        Поиск
                    </Button>
                </Col>
            </Row>

        </div>
    )

export default connector(lifecycle(methods)(RequestFilter));