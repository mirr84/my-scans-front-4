import React from 'react';


import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {Menu, Layout, Popconfirm, message, Button} from "antd";

const {Header} = Layout;

const Nav = ({
                 user,
                 onChangeLogOut
             }) => {

    return (
        <Header style={{padding: '0 10px', position: 'fixed', width: '100%', background: '#00152900'}}>
            <Menu mode="horizontal"
                  defaultSelectedKeys={[window.location.href.split('#/')[1] || 'journal']}>
                <Menu.Item key="scan">
                    <Link to={'/scan'}>Заказ</Link>
                </Menu.Item>
                <Menu.Item key="journal">
                    <Link to={'/journal'}>Требует вноса</Link>
                </Menu.Item>

                {
                    user.login ?
                        <Menu.Item key="exit" style={{'float': 'right'}}>
                            <Popconfirm placement="bottomRight"
                                        title={'Выйти?'}
                                        onConfirm={() => onChangeLogOut()}
                                        okText={'Да'}
                                        cancelText={'Нет'}>
                                Выход
                            </Popconfirm>
                        </Menu.Item> : ''
                }
                {
                    user.login ?
                    <Menu.Item disabled style={{'float': 'right'}}>
                        Пользователь:
                        {
                            ' ' + user.login
                        }
                    </Menu.Item> : ''
                }
            </Menu>
        </Header>
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
            onChangeLogOut: (value) => dispatch({type: 'CHANGE_DO_LOGOUT_REQUEST'}),
        }
    )
)(Nav);
