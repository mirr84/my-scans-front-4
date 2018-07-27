import React from 'react';

import {connector} from "../store/utils/connector";

const RequestSender = ({state, dispatch}) =>
    (
        <div>
            RequestSender
            {/*<br/>*/}
            {/*{*/}
                {/*JSON.stringify(*/}
                    {/*state.scanReducer.order.sender*/}
                {/*)*/}
            {/*}*/}
        </div>
    )

export default connector(RequestSender);