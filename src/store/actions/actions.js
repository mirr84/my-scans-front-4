import {ACTION_MENU_COLLAPSE, ACTION_MENU_ITEM, ACTION_IS_AUTH, ACTION_IS_SHOW_MODAL} from "./actionConst";

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