import React from 'react';

import {connect} from "react-redux";

import axios from 'axios';
import {Modal, Mention, Button, Icon, Input, notification} from 'antd';

const Login = ({
                   user,
                   onChangeLogin, onChangePassword, onChangeLoginModal, onChangeLoginRequest, onChangeDoLoginRequest
               }) => {

    const onSearchChange = (name) => {
        onChangeLoginRequest(true);
        axios.post(
            '/api/auth/getLoginList',
            {
                filter: {name},
                paging: {size: 10, offset: 0},
                lang: "rus",
                user: {lang: "rus"}
            }
        )
            .then(
                resp => onChangeLoginRequest(false, resp.data.items.map(item => item.login)),
                err => onChangeLoginRequest(false)
            )
    }

    const doLogin = () => {
        onChangeDoLoginRequest(true);
        axios.post(
            '/api/auth/login',
            {
                login: user.login,
                password: user.password,
                lang: "rus",
                user: {lang: "rus"}
            }
        )
            .then(
                resp => {
                    onChangeDoLoginRequest(false);
                },
                err => {
                    onChangeDoLoginRequest(false);
                    notification.warning({
                        message: 'Ошибка авторизации',
                        description: err.response.data.alerts.map(item => item.msg).join(',')
                    });
                }
            )
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
                           onChange={(value) => onChangePassword(value.target.value)}
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
            onChangeLogin: (login) => dispatch({type: 'CHANGE_LOGIN', login}),
            onChangePassword: (password) => dispatch({type: 'CHANGE_PASSWORD', password}),
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
