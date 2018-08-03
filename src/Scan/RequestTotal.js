import React from 'react';

import {connector} from "../store/utils/connector";
import {Container} from "reactstrap";

const RequestTotal = ({state, dispatch}) =>
    (
        <div>
            <Container fluid={true}>
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
            </Container>
        </div>
    )

export default connector(RequestTotal);