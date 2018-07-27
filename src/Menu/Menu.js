import React from 'react';

import {connector} from "../store/utils/connector";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Modal,
    ModalBody,
    Card,
    Button,
    CardTitle, CardBody
} from 'reactstrap';

const Menu = ({state, dispatch}) =>
    (
        <div>

            <Navbar color="light" light expand="md">
                <NavbarToggler onClick={() => dispatch.changeMenuCollapse(!state.menuReducer.collapse)}/>
                <Collapse isOpen={state.menuReducer.collapse} navbar>
                    <Nav navbar>
                        <NavItem active={state.menuReducer.item === 'scan'}>
                            <NavLink href="#"
                                     onClick={
                                         () => {
                                             dispatch.changeMenuItem('scan');
                                         }
                                     }>
                                Заказ
                            </NavLink>
                        </NavItem>
                        <NavItem active={state.menuReducer.item === 'journal'}>
                            <NavLink href="#"
                                     onClick={
                                         () => {
                                             if (!state.scanReducer.isGetOrderFromWork) {
                                                 dispatch.changeMenuItem('journal');
                                             } else {
                                                 dispatch.changeIsStopGetOrderFromWorkModal(true);
                                             }
                                         }
                                     }>
                                Требует вноса
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Пользователь: {state.loginReducer.login}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={() => {
                                dispatch.changeLogOut();
                            }}>Выход</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            <Modal isOpen={state.scanReducer.isStopGetOrderFromWorkModal}>
                <ModalBody>
                    <Card>
                        <CardBody>
                            <CardTitle>Остановать текущий внос и перейти в журнал?</CardTitle>
                            <div style={{float: 'right'}}>
                                <Button color="warning"
                                        onClick={
                                            () => {
                                                dispatch.changeIsStopGetOrderFromWorkModal(false);
                                                dispatch.changeIsGetOrderFromWork(false);
                                                dispatch.changeSetOrderData(null);
                                                dispatch.changeMenuItem('journal');
                                            }
                                        }
                                >
                                    Да
                                </Button>
                                {' '}
                                <Button color="success"
                                        onClick={() => dispatch.changeIsStopGetOrderFromWorkModal(false)}
                                >
                                    Нет
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </ModalBody>
            </Modal>

        </div>

    )

export default connector(Menu)