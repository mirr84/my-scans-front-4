import React from 'react';

import {connect} from "react-redux";

import {Modal, Mention} from 'antd';

const Login = ({
                   user,
                   onChangeLogin, onChangeLoginModal, onChangeLoginRequest
               }) => {

    const onSearchChange = (value) => {
        onChangeLoginRequest(true, []);
        setTimeout(
            () => {
                onChangeLoginRequest(false, ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']);
            }, 1500
        );
    }

    const onChange = (value) => onChangeLogin(value);

    let content =
        <div>
            <Mention
                prefix={''}
                loading={user.loading}
                suggestions={user.suggestions}
                onSearchChange={onSearchChange}
                onChange={onChange}
                notFoundContent={'Нет данных'}
            />
        </div>

    const showLoginForm = () => {
        onChangeLoginModal(true);
        Modal.info({
            title: 'Авторизация',
            content,
            okText: 'Войти',
            onOk() {
                onChangeLoginModal(false);
            }
        });
    }

    return (
        <div>
            {
                !user.showLoginModal ? showLoginForm() : ''
            }
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
            onChangeLoginRequest: (loading, suggestions) => dispatch({type: 'CHANGE_LOGIN_REQUEST', loading, suggestions})
        }
    )
)(Login);
