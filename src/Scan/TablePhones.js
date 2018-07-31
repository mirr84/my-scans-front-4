import React from 'react';

import {connector} from "../store/utils/connector";
import {Button, Table} from "reactstrap";

const TablePhones = ({state, dispatch}) =>
    (
        <div>

            <Table size="sm" hover striped>
                <thead>
                <tr>
                    <th>Тип</th>
                    <th>Номер</th>
                    <th>Добавочный</th>
                </tr>
                </thead>
                <tbody>



                </tbody>
            </Table>

        </div>
    )

export default connector(TablePhones);