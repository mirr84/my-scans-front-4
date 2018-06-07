import React from 'react';

import {Modal} from 'antd';

const Login = () => {

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
                /*{showLoginForm()}*/
            }
        </div>
    );
};

export default Login;
