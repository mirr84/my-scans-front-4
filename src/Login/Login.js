import React from 'react';

import {connector} from "../store/utils/connector";

import {
    Modal,
    ModalHeader,
    ModalBody,
    Button,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    FormGroup, Label, Input
} from "reactstrap";

const Login = ({state, dispatch}) =>
    (
        <Modal isOpen={state.loginReducer.isShowModal}>
            <ModalBody>
                <Card>
                {/*<CardImg top src="resources/img/logo.png"  />*/}
                <CardBody>
                    <CardTitle>Форма авторизации</CardTitle>
                        <FormGroup>
                            <Label for="login">Имя пользователя:</Label>
                            <Input type="text" id="login" placeholder="Логин" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Пароль:</Label>
                            <Input type="password" id="password" placeholder="Пароль" />
                        </FormGroup>
                    <Button
                        className={'ld-ext-right'}
                        onClick={
                            () => {
                                dispatch.changeIsShowModal(false);
                                dispatch.changeIsAuth(true);
                            }
                        }>
                        Войти
                    </Button>
                </CardBody>
            </Card>
            </ModalBody>
        </Modal>
    )

export default connector(Login);