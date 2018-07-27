import React from 'react';

import {connector} from "../store/utils/connector";
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';

const Menu = ({state, dispatch}) =>
    (
            <Navbar color="light" light expand="md">
                <NavbarToggler onClick={ () => dispatch.changeMenuCollapse(!state.menuReducer.collapse) } />
                <Collapse isOpen={state.menuReducer.collapse} navbar>
                    <Nav navbar>
                        <NavItem active={state.menuReducer.item === 'scan'}>
                            <NavLink href="#"
                                     onClick={
                                         () => { dispatch.changeMenuItem('scan'); }
                                     } >
                                Заказ
                            </NavLink>
                        </NavItem>
                        <NavItem active={state.menuReducer.item === 'journal'}>
                            <NavLink href="#"
                                     onClick={
                                         () => { dispatch.changeMenuItem('journal'); }
                                     } >
                                Требует вноса
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Пользователь: {state.loginReducer.login}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={ () => { dispatch.changeLogOut(); } }>Выход</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
    )

export default connector(Menu)