import React from 'react';

import {connector} from "../store/utils/connector";

import {
    Modal,
    ModalBody,
    Button,
    Card,
    CardBody,
    CardTitle,
    FormGroup, Label, Input, Form
} from "reactstrap";
import {doLogin} from "./serviceLogin";
import {AsyncLogin} from "../AsyncTypeaheads/Login";

const Login = ({state, dispatch}) =>
    (
        <Modal isOpen={state.loginReducer.isShowModal}>
            <ModalBody>
                <Card className={'margin-0'}>
                    {/*<CardImg top src="resources/img/logo.png"  />*/}

                    <CardBody>
                        <CardTitle>Форма авторизации</CardTitle>
                        <Form onSubmit={(e) => { e.preventDefault(); doLogin({state, dispatch});}}>
                            <FormGroup>
                                <Label for="login">Имя пользователя:</Label>
                                <AsyncLogin props={{state, dispatch}}
                                            id={'login'}
                                           bsSize={'sm'}
                                           value={state.loginReducer.login}
                                           onChange={
                                               (e) => {
                                                   dispatch.changeLoginInput(e)
                                               }
                                           }
                                           onBlur={
                                               () => {
                                               }
                                           }
                                           placeholder={'Имя пользователя'}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Пароль:</Label>
                                <Input type="password"
                                       id="password"
                                       bsSize={'sm'}
                                       placeholder="Пароль"
                                       value={state.loginReducer.password}
                                       onChange={(e) => {
                                           dispatch.changePasswordInput(e.target.value)
                                       }}
                                />
                            </FormGroup>
                            <div style={{float: 'right'}}>
                                <Button
                                    size={'sm'}
                                    disabled={!state.loginReducer.login || !state.loginReducer.password}>
                                    Войти
                                </Button>
                            </div>
                        </Form>
                    </CardBody>

                </Card>
            </ModalBody>
        </Modal>
    )

export default connector(Login);
