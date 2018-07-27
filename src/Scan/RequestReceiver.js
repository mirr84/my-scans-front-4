import React from 'react';

import {connector} from "../store/utils/connector";

const RequestReceiver = ({state, dispatch}) =>
    (
        <div>
            RequestReceiver
            <br/>
            {
                JSON.stringify(
                    state.scanReducer.order.receiver
                )
            }
        </div>
    )

export default connector(RequestReceiver);