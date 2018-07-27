import React from 'react';

import {connector} from "../store/utils/connector";
import {Button, Row, Col, Label, FormGroup} from "reactstrap";
import {doFilter, getStatusList} from "./serviceJournal";

import Select from 'react-select';
import lifecycle from "react-pure-lifecycle";

import DatePicker from 'react-datepicker';
import moment from 'moment';

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
                <Col>
                    <FormGroup>
                        <Label for="status">Статус заявки:</Label>
                        <Select
                            id="status"
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
                        <Label for="dateFrom">Дата фото с:</Label>
                        <DatePicker
                            id="dateFrom"
                            className="form-control"
                            dateFormat="DD.MM.YYYY"
                            readOnly={true}
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
                            minDate={moment(state.journalReducer.dateFrom, 'DD.MM.YYYY')}
                            selected={moment(state.journalReducer.dateTo, 'DD.MM.YYYY')}
                            onChange={(e) => dispatch.changeDateToFilter(e.format('DD.MM.YYYY'))}
                        />
                    </FormGroup>
                </Col>
                <Col>
                </Col>
                <Col>
                    <Button color="success"
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