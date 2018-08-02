import React from 'react';

import {connector} from "../store/utils/connector";
import {Button, FormGroup, Input, Table} from "reactstrap";

const DEF_PHONE = {select: true, type: 'mob', number: '', extNumber: ''};

const TablePhones = ({state, dispatch, phones}) =>
    (
        <div>
            <Table size="sm" hover striped>
                <thead>
                <tr>
                    <th></th>
                    <th>Тип</th>
                    <th>Номер</th>
                    <th>Добавочный</th>
                </tr>
                </thead>
                <tbody>

                {
                    phones
                        .map(
                            (item, idx) => (
                                <tr key={idx}>
                                    <td>
                                        <FormGroup check>
                                            <div check>
                                                <Input checked={item.select}
                                                       type="checkbox"
                                                       onChange={
                                                           () => {
                                                               item.select = !item.select;
                                                               dispatch.changeSetPhones(phones);
                                                           }
                                                       }
                                                />
                                            </div>
                                        </FormGroup>
                                    </td>
                                    <td>
                                        <Input bsSize={'sm'}
                                               type="select"
                                               value={item.type}
                                               onChange={
                                                   (e) => {
                                                       item.type = e.target.value;
                                                       dispatch.changeSetPhones(phones);
                                                   }
                                               }
                                        >
                                            {
                                                state.scanReducer.phoneTypes.map(
                                                    item => (
                                                        <option key={item.code} value={item.code}>{item.name}</option>
                                                    )
                                                )
                                            }
                                        </Input>
                                    </td>
                                    <td>
                                        <Input bsSize={'sm'}
                                               type="text"
                                               value={item.number}
                                               onChange={
                                                   (e) => {
                                                       item.number = e.target.value;
                                                       dispatch.changeSetPhones(phones);
                                                   }
                                               }
                                        />
                                    </td>
                                    <td>
                                        <Input bsSize={'sm'}
                                               type="text"
                                               value={item.extNumber}
                                               onChange={
                                                   (e) => {
                                                       item.extNumber = e.target.value;
                                                       dispatch.changeSetPhones(phones);
                                                   }
                                               }
                                        />
                                    </td>
                                </tr>
                            )
                        )
                }

                <tr>
                    <td colSpan={4}>
                        <Button size={'sm'}
                                style={{width: '100%'}}
                                onClick={() => dispatch.changeSetPhones(phones.push(Object.assign({}, DEF_PHONE)))}
                        >Добавить телефон</Button>
                    </td>
                </tr>

                </tbody>
            </Table>
        </div>
    )

export default connector(TablePhones);