import React from 'react';

import {connector} from "../store/utils/connector";
import {Button, Input, Table} from "reactstrap";
import {FaCopy, FaMinus} from 'react-icons/fa';

const DEF_PLACE = {
    description: '',
    packNumber: '',
    length: '0',
    height: '0',
    width: '0',
    weight: '0.5'
}

const validateGab = (place) => {
    place = Object.assign({}, place);
    place.length = place.length.trim();
    place.height = place.height.trim();
    place.width = place.width.trim();
    if (place.length == null && place.height == null && place.width == null) return true;
    if (place.length === '' && place.height === '' && place.width === '') return true;
    if (place.length === '0' && place.height === '0' && place.width === '0') return true;
    if (place.length > 0 && place.height > 0 && place.width > 0) return true;
    return false;
}

const RequestInformationAboutCargo = ({state, dispatch}) =>
    (
        <div>

            <Table size="sm" hover striped>
                <thead>
                <tr>
                    <th>Описание</th>
                    <th>№ упаковки</th>
                    <th>Длина, см</th>
                    <th>Высота, см</th>
                    <th>Ширина, см</th>
                    <th>Вес, кг</th>
                    <th>Объем. вес</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>

                {
                    state.scanReducer.order.cargo.places.map(
                        (item, idx) => (
                            <tr key={idx}>
                                <td>
                                    <Input bsSize={'sm'}
                                           type="text"
                                           value={item.description}
                                           onChange={
                                               (e) => {
                                                   item.description = e.target.value;
                                                   dispatch.changeSetPlaces(state.scanReducer.order.cargo.places);
                                               }
                                           }
                                    />
                                </td>
                                <td>
                                    <Input bsSize={'sm'}
                                           type="text"
                                           value={item.packNumber}
                                           onChange={
                                               (e) => {
                                                   item.packNumber = e.target.value;
                                                   dispatch.changeSetPlaces(state.scanReducer.order.cargo.places);
                                               }
                                           }
                                    />
                                </td>
                                <td>
                                    <Input bsSize={'sm'}
                                           type="text"
                                           value={item.length}
                                           invalid={!validateGab(item)}
                                           onChange={
                                               (e) => {
                                                   item.length = e.target.value;
                                                   dispatch.changeSetPlaces(state.scanReducer.order.cargo.places);
                                               }
                                           }
                                    />
                                </td>
                                <td>
                                    <Input bsSize={'sm'}
                                           type="text"
                                           value={item.height}
                                           invalid={!validateGab(item)}
                                           onChange={
                                               (e) => {
                                                   item.height = e.target.value;
                                                   dispatch.changeSetPlaces(state.scanReducer.order.cargo.places);
                                               }
                                           }
                                    />
                                </td>
                                <td>
                                    <Input bsSize={'sm'}
                                           type="text"
                                           value={item.width}
                                           invalid={!validateGab(item)}
                                           onChange={
                                               (e) => {
                                                   item.width = e.target.value;
                                                   dispatch.changeSetPlaces(state.scanReducer.order.cargo.places);
                                               }
                                           }
                                    />
                                </td>
                                <td>
                                    <Input bsSize={'sm'}
                                           type="text"
                                           value={item.weight}
                                           onChange={
                                               (e) => {
                                                   item.weight = e.target.value;

                                               }
                                           }
                                    />
                                </td>
                                <td>

                                </td>
                                <td>
                                    {/*<Button size={'sm'}*/}
                                    {/*color='primary'*/}
                                    {/*onClick={*/}
                                    {/*()=>{}*/}
                                    {/*}*/}
                                    {/*>*/}
                                    {/*<FaCopy/>*/}
                                    {/*</Button>*/}
                                </td>
                                <td>
                                    <Button size={'sm'}
                                            color='danger'
                                            onClick={
                                                () => {
                                                    dispatch.changeSetPlaces(state.scanReducer.order.cargo.places = state.scanReducer.order.cargo.places.filter(item1 => item1 !== item))
                                                }
                                            }
                                    >
                                        <FaMinus/>
                                    </Button>
                                </td>
                            </tr>
                        )
                    )
                }

                <tr>
                    <td colSpan={9}>
                        <Button size={'sm'}
                                style={{width: '100%'}}
                                onClick={() => dispatch.changeSetPlaces(state.scanReducer.order.cargo.places.push(Object.assign({}, DEF_PLACE)))}
                        >Добавить место</Button>
                    </td>
                </tr>

                </tbody>
            </Table>

        </div>
    )

export default connector(RequestInformationAboutCargo);