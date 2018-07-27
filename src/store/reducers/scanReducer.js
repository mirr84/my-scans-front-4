import {
    ACTION_CHANGE_IS_GET_TASK_BY_KEY_PROGRESS,
    ACTION_CHANGE_SER_ORDER_DATA,
    ACTION_LOGOUT
} from "../actions/actionConst";

import {getLocalStorage} from "../utils/getLocalStorage";

const initState = {
    isProgressGetTaskByKey: false,
    order: null
}

export const scanReducer = (state = getLocalStorage('scanReducer', initState), action) => {

    let newState = Object.assign({}, state);

    if (action.type === ACTION_LOGOUT) {
        newState = initState;
    }

    if (action.type === ACTION_CHANGE_IS_GET_TASK_BY_KEY_PROGRESS) {
        newState.isProgressGetTaskByKey = action.payload;
    }

    if (action.type === ACTION_CHANGE_SER_ORDER_DATA) {
        newState.order = action.payload;
    }

    return newState;

}