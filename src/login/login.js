import React from 'react';

import {Modal} from 'antd';
import {connect} from "react-redux";

const Login = ({user}) => {

    const showLoginForm = () => {
        Modal.info({
            title: 'Авторизация',
            content: (
                <div>
                    111
                </div>
            ),
            okText: 'Войти',
            onOk() {
                console.log('OK');
                showLoginForm();
            }
        });
    }

    return (
        <div>
            {
                showLoginForm()
            }
        </div>
    );
};

export default connect(
    state => ({
        user: state.user
    }),
    dispatch => ({})
)(Login);
