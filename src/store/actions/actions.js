import {
    ACTION_MENU_COLLAPSE, ACTION_MENU_ITEM, ACTION_IS_AUTH, ACTION_IS_SHOW_MODAL, ACTION_CHANGE_LOGIN_INPUT,
    ACTION_CHANGE_PASSWORD_INPUT, ACTION_CHANGE_PWT, ACTION_LOGOUT} from "./actionConst";

export const actionChangeMenuCollapse = (v) => (
    {
        type: ACTION_MENU_COLLAPSE,
        payload: v
    }
)

export const actionChangeMenuItem = (v) => (
    {
        type: ACTION_MENU_ITEM,
        payload: v
    }
)
export const actionChangeLogOut = () => (
    {
        type: ACTION_LOGOUT
    }
)

export const actionChangeIsAuth = (v) => (
    {
        type: ACTION_IS_AUTH,
        payload: v
    }
)

export const actionChangeIsShowModal = (v) => (
    {
        type: ACTION_IS_SHOW_MODAL,
        payload: v
    }
)

export const actionChangeLoginInput = (v) => (
    {
        type: ACTION_CHANGE_LOGIN_INPUT,
        payload: v
    }
)

export const actionChangePasswordInput = (v) => (
    {
        type: ACTION_CHANGE_PASSWORD_INPUT,
        payload: v
    }
)

export const actionChangePwt = (v) => (
    {
        type: ACTION_CHANGE_PWT,
        payload: v
    }
)