import React from 'react';

import {connector} from "../store/utils/connector";

const RequestPaymentInformation = ({state, dispatch}) =>
    (
        <div>
            RequestPaymentInformation
            {/*<br/>*/}
            {/*{*/}
                {/*JSON.stringify(*/}
                    {/*state.scanReducer.order.payer*/}
                {/*)*/}
            {/*}*/}
            {/*<br/>*/}
            {/*{*/}
                {/*JSON.stringify(*/}
                    {/*state.scanReducer.order.other*/}
                {/*)*/}
            {/*}*/}
            {/*<br/>*/}
            {/*{*/}
                {/*JSON.stringify(*/}
                    {/*state.scanReducer.order.services*/}
                {/*)*/}
            {/*}*/}
        </div>
    )

export default connector(RequestPaymentInformation);