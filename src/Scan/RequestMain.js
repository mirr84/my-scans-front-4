import React from 'react';

import {connector} from "../store/utils/connector";

const RequestMain = ({state, dispatch}) =>
    (
        <div>
            RequestMain
            <br/>
            {
                state && state.scanReducer && state.scanReducer.order && state.scanReducer.order.main?
                JSON.stringify(
                    state.scanReducer.order.main
                ): ''
            }
        </div>
    )

export default connector(RequestMain);