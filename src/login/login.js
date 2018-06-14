import React from 'react';

import {connect} from "react-redux";

import axios from 'axios';
import {Modal, Mention, Button, Icon, Input} from 'antd';

const Login = ({
                   user,
                   onChangeLogin, onChangePassword, onChangeLoginModal, onChangeLoginRequest, onChangeDoLoginRequest
               }) => {

    const onSearchChange = (name) => {
        onChangeLoginRequest(true);
        axios.post(
            '/api/auth/getLoginList',
            {
                user: {lang: "rus"},
                filter: {name},
                paging: {size: 10, offset: 0},
                lang: "rus"
            }
        )
            .then(
                resp => onChangeLoginRequest(false, resp.data.items.map(item => item.login)),
                err => onChangeLoginRequest(false)
            )
    }

    const doLogin = () => {
        onChangeDoLoginRequest(true);
        setTimeout(() => {
            onChangeDoLoginRequest(false);

        }, 1000)
    }

    const showLoginForm = () => {
        if (!user.showLoginModal) {
            onChangeLoginModal(true);
        }
    };
    showLoginForm();

    return (
        <div>
            <Modal title="Авторизация"
                   closable={false}
                   footer={
                       <div>
                           <Button type="primary"
                                   loading={user.doLoginProgress}
                                   onClick={doLogin}>
                               Войти
                           </Button>
                       </div>
                   }
                   visible={user.showLoginModal}
            >
                <div>
                    <Mention
                        prefix={''}
                        loading={user.loading}
                        suggestions={user.suggestions}
                        disabled={user.doLoginProgress}
                        onSearchChange={onSearchChange}
                        onChange={(value) => onChangeLogin(value)}
                        notFoundContent={'Нет данных'}
                        placeholder={'Имя пользователя'}
                    />
                    <Input type={'password'}
                           placeholder={'Пароль'}
                           onChange={(value) => onChangePassword(value)}
                           disabled={user.doLoginProgress}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default connect(
    state => (
        {
            user: state.user
        }
    ),
    dispatch => (
        {
            onChangeLoginModal: (value) => dispatch({type: 'LOGIN_MODAL', value}),
            onChangeLogin: (value) => dispatch({type: 'CHANGE_LOGIN', value}),
            onChangePassword: (value) => dispatch({type: 'CHANGE_PASSWORD', value}),
            onChangeLoginRequest: (loading, suggestions) => dispatch({
                type: 'CHANGE_LOGIN_REQUEST',
                loading,
                suggestions
            }),
            onChangeDoLoginRequest: (progress, login, token) => dispatch({
                type: 'CHANGE_DO_LOGIN_REQUEST',
                progress,
                login,
                token
            }),
        }
    )
)(Login);
