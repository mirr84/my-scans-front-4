import React from 'react';

import {connector} from "../store/utils/connector";
import {Button} from "reactstrap";
import {handleTask} from "./serviceScan";

const RequestTotal = ({state, dispatch}) =>
    (
        <div className={state.scanReducer.isProgressCalculation ? 'div-load' : ''}>


            {
                !state.scanReducer.order.calculator.totalAmount?
                    (
                        <h5>
                            Не все поля заполнены для получения значений расчета
                        </h5>
                    )
                    :
                    (
                        <div>

                            {
                                state.scanReducer.order.calculator &&
                                state.scanReducer.order.calculator.keyValues &&
                                Array.isArray(state.scanReducer.order.calculator.keyValues) &&
                                state.scanReducer.order.calculator.keyValues.length > 0 ?
                                    state.scanReducer.order.calculator.keyValues.map(
                                        (item, idx) => (
                                            <div key={idx}>
                                                {item.key}: {item.value}
                                                {
                                                    state.scanReducer.order.currency && state.scanReducer.order.currency.commonCurrency && state.scanReducer.order.currency.commonCurrency.shortName ?
                                                        (' ' + state.scanReducer.order.currency.commonCurrency.shortName)
                                                        :
                                                        (<div/>)
                                                }
                                            </div>
                                        )
                                    )
                                    :
                                    (<div/>)
                            }

                            <br/>

                            {
                                state.scanReducer.order.calculator &&
                                state.scanReducer.order.calculator.discounts &&
                                Array.isArray(state.scanReducer.order.calculator.discounts) &&
                                state.scanReducer.order.calculator.discounts.length > 0 ?
                                    state.scanReducer.order.calculator.discounts.map(
                                        (item, idx) => (
                                            <div key={idx}>
                                                {item.key}: {item.value}
                                                {
                                                    state.scanReducer.order.currency && state.scanReducer.order.currency.commonCurrency && state.scanReducer.order.currency.commonCurrency.shortName ?
                                                        (' ' + state.scanReducer.order.currency.commonCurrency.shortName)
                                                        :
                                                        (<div/>)
                                                }
                                            </div>
                                        )
                                    )
                                    :
                                    (<div/>)
                            }

                            <br/>

                            {
                                state.scanReducer.order.calculator &&
                                state.scanReducer.order.calculator.extraCharge &&
                                Array.isArray(state.scanReducer.order.calculator.extraCharge) &&
                                state.scanReducer.order.calculator.extraCharge.length > 0 ?
                                    state.scanReducer.order.calculator.extraCharge.map(
                                        (item, idx) => (
                                            <div key={idx}>
                                                {item.key}: {item.value}
                                                {
                                                    state.scanReducer.order.currency && state.scanReducer.order.currency.commonCurrency && state.scanReducer.order.currency.commonCurrency.shortName ?
                                                        (' ' + state.scanReducer.order.currency.commonCurrency.shortName)
                                                        :
                                                        (<div/>)
                                                }
                                            </div>
                                        )
                                    )
                                    :
                                    (<div/>)
                            }

                            <br/>

                            <hr/>

                            <h4>
                                Итого: {state.scanReducer.order.calculator.totalAmount}
                                {
                                    state.scanReducer.order.currency && state.scanReducer.order.currency.commonCurrency && state.scanReducer.order.currency.commonCurrency.shortName ?
                                        (' ' + state.scanReducer.order.currency.commonCurrency.shortName)
                                        :
                                        (<div/>)
                                }
                            </h4>

                            <Button onClick={ () => handleTask({state, dispatch}) }>
                                Создать заказ
                            </Button>

                        </div>
                    )
            }

        </div>
    )

export default connector(RequestTotal);
