import React from 'react';

import {connector} from "../store/utils/connector";
import lifecycle from 'react-pure-lifecycle';

import Menu from "../Menu/Menu";

import {ToastContainer, toast} from "react-toastify";
import {checkLogin} from "../Login/serviceLogin";
import Login from "../Login/Login";

const methods = {
    componentDidMount(props) {
        checkLogin(props);
    }
}

const Main = ({state, dispatch}) =>
    (
        <div>

            <ToastContainer autoClose={8000} position={toast.POSITION.TOP_RIGHT}/>
            <Login />

            {
                state.loginReducer.isAuth ?
                    (
                        <div>
                            <Menu />
                            { state.menuReducer.item === 'scan'? (<div>scan</div>) : <div/> }
                            { state.menuReducer.item === 'journal'? (<div>journal</div>) : <div/> }
                        </div>
                    )
                    : <div />
            }

        </div>
    )

export default connector(lifecycle(methods)(Main));