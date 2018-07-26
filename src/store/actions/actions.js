import {
    ACTION_MENU_COLLAPSE, ACTION_MENU_ITEM, ACTION_IS_AUTH, ACTION_IS_SHOW_MODAL, ACTION_CHANGE_LOGIN_INPUT,
    ACTION_CHANGE_PASSWORD_INPUT, ACTION_CHANGE_PWT, ACTION_LOGOUT, ACTION_CHANGE_JOURNAL_FILTER_COLLAPSE, ACTION_CHANGE_DATA_JOURNAL,
    ACTION_CHANGE_SELECT_ROW_JOURNAL, ACTION_CHANGE_JOURNAL_IMAGE, ACTION_CHANGE_ZOOM_IMAGE_JOURNAL, ACTION_CHANGE_JOURNAL_IMAGE_PROGRESS
} from "./actionConst";

export const actionChangeMenuCollapse = (payload) => (
    {
        type: ACTION_MENU_COLLAPSE,
        payload
    }
)

export const actionChangeMenuItem = (payload) => (
    {
        type: ACTION_MENU_ITEM,
        payload
    }
)
export const actionChangeLogOut = () => (
    {
        type: ACTION_LOGOUT
    }
)

export const actionChangeIsAuth = (payload) => (
    {
        type: ACTION_IS_AUTH,
        payload
    }
)

export const actionChangeIsShowModal = (payload) => (
    {
        type: ACTION_IS_SHOW_MODAL,
        payload
    }
)

export const actionChangeLoginInput = (payload) => (
    {
        type: ACTION_CHANGE_LOGIN_INPUT,
        payload
    }
)

export const actionChangePasswordInput = (payload) => (
    {
        type: ACTION_CHANGE_PASSWORD_INPUT,
        payload
    }
)

export const actionChangePwt = (payload) => (
    {
        type: ACTION_CHANGE_PWT,
        payload
    }
)

export const actionChangeJournalFilterCollapse = (payload) => (
    {
        type: ACTION_CHANGE_JOURNAL_FILTER_COLLAPSE,
        payload
    }
)

export const actionChangeDataJournal = (payload) => (
    {
        type: ACTION_CHANGE_DATA_JOURNAL,
        payload
    }
)

export const actionChangeSelectRowJournal = (payload) => (
    {
        type: ACTION_CHANGE_SELECT_ROW_JOURNAL,
        payload
    }
)

export const actionChangeJournalImage = (payload) => (
    {
        type: ACTION_CHANGE_JOURNAL_IMAGE,
        payload
    }
)

export const actionChangeZoomImageJournal = (payload) => (
    {
        type: ACTION_CHANGE_ZOOM_IMAGE_JOURNAL,
        payload
    }
)

export const actionChangeJournalImageProgress = (payload) => (
    {
        type: ACTION_CHANGE_JOURNAL_IMAGE_PROGRESS,
        payload
    }
)