import React from 'react';

import {connector} from "../store/utils/connector";
import {Container} from "reactstrap";

const RequestTotal = ({state, dispatch}) =>
    (
        <div className={state.scanReducer.isProgressCalculation ? 'div-load' : ''}>
                {/*{*/}
                    {/*JSON.stringify(*/}
                        {/*state.scanReducer.order.currency*/}
                    {/*)*/}
                {/*}*/}
                {/*<br/>*/}
                {/*{*/}
                    {/*JSON.stringify(*/}
                        {/*state.scanReducer.order.calculator*/}
                    {/*)*/}
                {/*}*/}

            {
                state.scanReducer.order.calculator &&
                state.scanReducer.order.calculator.keyValues &&
                Array.isArray(state.scanReducer.order.calculator.keyValues) &&
                state.scanReducer.order.calculator.keyValues.length > 0 ?
                    state.scanReducer.order.calculator.keyValues.map(
                        item => (
                            <div>
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
                        item => (
                            <div>
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
                        item => (
                            <div>
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
                Итого: { state.scanReducer.order.calculator.totalAmount }
                {
                    state.scanReducer.order.currency && state.scanReducer.order.currency.commonCurrency && state.scanReducer.order.currency.commonCurrency.shortName ?
                        (' ' + state.scanReducer.order.currency.commonCurrency.shortName)
                        :
                        (<div/>)
                }
            </h4>

        </div>
    )

export default connector(RequestTotal);
