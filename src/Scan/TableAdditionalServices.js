import React from 'react';

import {connector} from "../store/utils/connector";
import {Button, FormGroup, Input, Label, Table} from "reactstrap";

const TableAdditionalServices = ({state, dispatch}) =>
    (
        <div>
            <Label>Дополнительные услуги</Label>
            <Table size="sm" hover striped>
                <thead>
                <tr>
                    <th></th>
                    <th>Наименование</th>
                    <th>Значение</th>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </Table>
        </div>
    )

export default connector(TableAdditionalServices);