import React from 'react';

import {connector} from "../store/utils/connector";

const RequestTotal = ({state, dispatch}) =>
    (
        <div>
            RequestTotal
            {/*<br/>*/}
            {/*{*/}
                {/*JSON.stringify(*/}
                    {/*state.scanReducer.order.calculator*/}
                {/*)*/}
            {/*}*/}
        </div>
    )

export default connector(RequestTotal);