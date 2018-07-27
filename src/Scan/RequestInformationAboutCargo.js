import React from 'react';

import {connector} from "../store/utils/connector";

const RequestInformationAboutCargo = ({state, dispatch}) =>
    (
        <div>
            RequestInformationAboutCargo
            <br/>
            {
                JSON.stringify(
                    state.scanReducer.order.cargo
                )
            }
        </div>
    )

export default connector(RequestInformationAboutCargo);