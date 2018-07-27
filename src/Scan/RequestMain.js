import React from 'react';

import {connector} from "../store/utils/connector";

const RequestMain = ({state, dispatch}) =>
    (
        <div>
            RequestMain
            {/*<br/>*/}
            {/*{*/}
                {/*JSON.stringify(*/}
                    {/*state.scanReducer.order.main*/}
                {/*)*/}
            {/*}*/}
        </div>
    )

export default connector(RequestMain);