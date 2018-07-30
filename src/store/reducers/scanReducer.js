import {
    ACTION_LOGOUT, ACTION_CHANGE_IS_GET_TASK_BY_KEY_PROGRESS, ACTION_CHANGE_SET_ORDER_DATA, ACTION_IS_GET_ORDER_FROM_WORK,
    ACTION_IS_STOP_GET_ORDER_FROM_WORK_MODAL, ACTION_CHANGE_MOVED_FROM, ACTION_CHANGE_SCAN_MAIN_COLLAPSE, ACTION_CHANGE_SCAN_PAYMENT_INFORMATION_COLLAPSE,
    ACTION_CHANGE_SCAN_TOTAL_COLLAPSE, ACTION_CHANGE_SCAN_SENDER_COLLAPSE, ACTION_CHANGE_SCAN_RECEIVER_COLLAPSE, ACTION_CHANGE_SCAN_INFORMATION_ABOUT_CARGO_COLLAPSE

} from "../actions/actionConst";

import {getLocalStorage} from "../utils/getLocalStorage";

const order = {
    main: {
        orderNumber: '',
        date: '01.01.2018',
        orderType: 1,
        modeDelivery: 1
    }
}

const initState = {
    isProgressGetTaskByKey: false,
    order,
    isGetOrderFromWork: false,
    isStopGetOrderFromWorkModal: false,
    movedFrom: 'journal',

    mainCollapse: true,
    paymentInformationCollapse: true,
    totalCollapse: true,
    senderCollapse: true,
    receiverCollapse: true,
    informationAboutCargoCollapse: true
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

    if (action.type === ACTION_CHANGE_SCAN_MAIN_COLLAPSE) {
        newState.mainCollapse = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_PAYMENT_INFORMATION_COLLAPSE) {
        newState.paymentInformationCollapse = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_TOTAL_COLLAPSE) {
        newState.totalCollapse = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_SENDER_COLLAPSE) {
        newState.senderCollapse = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_RECEIVER_COLLAPSE) {
        newState.receiverCollapse = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_INFORMATION_ABOUT_CARGO_COLLAPSE) {
        newState.informationAboutCargoCollapse = action.payload;
    }


    return newState;

}