import React from 'react';

import {connector} from "../store/utils/connector";
import lifecycle from 'react-pure-lifecycle';

import {ToastContainer, toast} from "react-toastify";

import {checkLogin} from "../Login/serviceLogin";

import Menu from "../Menu/Menu";
import Login from "../Login/Login";
import Journal from "../Journal/Journal";
import Scan from "../Scan/Scan";

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
                            { state.menuReducer.item === 'scan'? (<Scan />) : <div/> }
                            { state.menuReducer.item === 'journal'? (<Journal />) : <div/> }
                        </div>
                    )
                    :
                    (
                        <div />
                    )
            }

        </div>
    )

export default connector(lifecycle(methods)(Main));