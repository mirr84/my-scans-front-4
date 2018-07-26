import React from 'react';

import {connector} from "../store/utils/connector";
import {Button, Container, Row, Col} from "reactstrap";
import {doFilter, getStatusList} from "./serviceJournal";

import Select from 'react-select';
import lifecycle from "react-pure-lifecycle";

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
                    <Select
                        placeholder={'Статус заявки'}
                        value={state.journalReducer.selectStatus}
                        isMulti={true}
                        isSearchable={false}
                        // menuIsOpen={true}
                        onChange={(e) => dispatch.changeSelectStatus(e)}
                        options={state.journalReducer.statusList.map(item => ({value: item.code, label: item.name}))}
                    />
                </Col>
                <Col>
                </Col>
                <Col>
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