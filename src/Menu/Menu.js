import React from 'react';

import {connector} from "../store/utils/connector";

import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';
import {cheakAuth} from "../Login/checkLogin";

const Menu = ({state, dispatch}) =>
    (

            <Navbar color="light" light expand="md">
                <NavbarToggler onClick={ () => dispatch.changeMenuCollapse(!state.menuReducer.collapse) } />
                <Collapse isOpen={state.menuReducer.collapse} navbar>
                    <Nav navbar>
                        <NavItem active={state.menuReducer.item === 'scan'}>
                            <NavLink href="#"
                                     onClick={
                                         () => { dispatch.changeMenuItem('scan'); cheakAuth({state, dispatch}); }
                                     } >
                                Заказ
                            </NavLink>
                        </NavItem>
                        <NavItem active={state.menuReducer.item === 'journal'}>
                            <NavLink href="#"
                                     onClick={
                                         () => { dispatch.changeMenuItem('journal'); cheakAuth({state, dispatch}); }
                                     } >
                                Требует вноса
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Пользователь: tester_nsk</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={ () => {} }>Выход</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

    )

export default connector(Menu)