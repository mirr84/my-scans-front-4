import {
    ACTION_LOGOUT, ACTION_CHANGE_IS_GET_TASK_BY_KEY_PROGRESS, ACTION_CHANGE_SET_ORDER_DATA, ACTION_IS_GET_ORDER_FROM_WORK,
    ACTION_IS_STOP_GET_ORDER_FROM_WORK_MODAL, ACTION_CHANGE_MOVED_FROM

} from "../actions/actionConst";

import {getLocalStorage} from "../utils/getLocalStorage";

const initState = {
    isProgressGetTaskByKey: false,
    order: null,
    isGetOrderFromWork: false,
    isStopGetOrderFromWorkModal: false,
    movedFrom: 'journal'
}

export const scanReducer = (state = getLocalStorage('scanReducer', initState), action) => {

    let newState = Object.assign({}, state);

    if (action.type === ACTION_LOGOUT) {
        newState = initState;
    }

    if (action.type === ACTION_CHANGE_IS_GET_TASK_BY_KEY_PROGRESS) {
        newState.isProgressGetTaskByKey = action.payload;
    }

    if (action.type === ACTION_CHANGE_SET_ORDER_DATA) {
        newState.order = action.payload;
    }

    if (action.type === ACTION_IS_GET_ORDER_FROM_WORK) {
        newState.isGetOrderFromWork = action.payload;
    }

    if (action.type === ACTION_IS_STOP_GET_ORDER_FROM_WORK_MODAL) {
        newState.isStopGetOrderFromWorkModal = action.payload;
    }

    if (action.type === ACTION_CHANGE_MOVED_FROM) {
        newState.movedFrom = action.payload;
    }

    return newState;

}