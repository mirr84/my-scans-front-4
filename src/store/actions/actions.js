import {
    ACTION_MENU_COLLAPSE, ACTION_MENU_ITEM, ACTION_IS_AUTH, ACTION_IS_SHOW_MODAL, ACTION_CHANGE_LOGIN_INPUT,
    ACTION_CHANGE_PASSWORD_INPUT, ACTION_CHANGE_PWT, ACTION_LOGOUT, ACTION_CHANGE_JOURNAL_FILTER_COLLAPSE, ACTION_CHANGE_DATA_JOURNAL,
    ACTION_CHANGE_SELECT_ROW_JOURNAL, ACTION_CHANGE_JOURNAL_IMAGE, ACTION_CHANGE_ZOOM_IMAGE_JOURNAL, ACTION_CHANGE_JOURNAL_IMAGE_PROGRESS,
    ACTION_IS_SHOW_RE_PHOTOGRAPHED_MODAL, ACTION_CHANGE_REPHOTO_REASONS_LIST, ACTION_CHANGE_REASONS_ITEM, ACTION_CHANGE_CLEAN_REASONS_ITEM,
    ACTION_CHANGE_OTHER_REASONS, ACTION_CHANGE_STATUS_LIST, ACTION_CHANGE_SELECT_STATUS, ACTION_CHANGE_DATE_FROM_FILTER, ACTION_CHANGE_DATE_TO_FILTER,
    ACTION_CHANGE_IS_JOURNAL_PROGRESS, ACTION_CHANGE_IS_GET_TASK_BY_KEY_PROGRESS, ACTION_CHANGE_SET_ORDER_DATA, ACTION_IS_GET_ORDER_FROM_WORK,
    ACTION_IS_STOP_GET_ORDER_FROM_WORK_MODAL, ACTION_CHANGE_MOVED_FROM
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

export const actionChangeIsShowLoginModal = (payload) => (
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

export const actionChangeIsShowRePhotographedModal = (payload) => (
    {
        type: ACTION_IS_SHOW_RE_PHOTOGRAPHED_MODAL,
        payload
    }
)

export const actionChangeRephotoReasonsList = (payload) => (
    {
        type: ACTION_CHANGE_REPHOTO_REASONS_LIST,
        payload
    }
)

export const actionChangeReasonsItem = (payload) => (
    {
        type: ACTION_CHANGE_REASONS_ITEM,
        payload
    }
)

export const actionChangeCleanRephotoReasons = (payload) => (
    {
        type: ACTION_CHANGE_CLEAN_REASONS_ITEM
    }
)

export const actionChangeOtherReason = (payload) => (
    {
        type: ACTION_CHANGE_OTHER_REASONS,
        payload
    }
)

export const actionChangeGetStatusList = (payload) => (
    {
        type: ACTION_CHANGE_STATUS_LIST,
        payload
    }
)

export const actionChangeSelectStatus = (payload) => (
    {
        type: ACTION_CHANGE_SELECT_STATUS,
        payload
    }
)

export const actionChangeDateFromFilter = (payload) => (
    {
        type: ACTION_CHANGE_DATE_FROM_FILTER,
        payload
    }
)

export const actionChangeDateToFilter = (payload) => (
    {
        type: ACTION_CHANGE_DATE_TO_FILTER,
        payload
    }
)

export const actionChangeIsJournalProgress = (payload) => (
    {
        type: ACTION_CHANGE_IS_JOURNAL_PROGRESS,
        payload
    }
)

export const actionChangeIsGetTaskByKeyProgress = (payload) => (
    {
        type: ACTION_CHANGE_IS_GET_TASK_BY_KEY_PROGRESS,
        payload
    }
)

export const actionChangeSetOrderData = (payload) => (
    {
        type: ACTION_CHANGE_SET_ORDER_DATA,
        payload
    }
)

export const actionChangeIsGetOrderFromWork = (payload) => (
    {
        type: ACTION_IS_GET_ORDER_FROM_WORK,
        payload
    }
)

export const actionChangeIsStopGetOrderFromWorkModal = (payload) => (
    {
        type: ACTION_IS_STOP_GET_ORDER_FROM_WORK_MODAL,
        payload
    }
)


export const actionChangeMovedFrom = (payload) => (
    {
        type: ACTION_CHANGE_MOVED_FROM,
        payload
    }
)