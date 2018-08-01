import {
    ACTION_LOGOUT,
    ACTION_CHANGE_IS_GET_TASK_BY_KEY_PROGRESS,
    ACTION_CHANGE_SET_ORDER_DATA,
    ACTION_IS_GET_ORDER_FROM_WORK,
    ACTION_IS_STOP_GET_ORDER_FROM_WORK_MODAL,
    ACTION_CHANGE_MOVED_FROM,
    ACTION_CHANGE_SCAN_MAIN_COLLAPSE,
    ACTION_CHANGE_SCAN_PAYMENT_INFORMATION_COLLAPSE,
    ACTION_CHANGE_SCAN_TOTAL_COLLAPSE,
    ACTION_CHANGE_SCAN_SENDER_COLLAPSE,
    ACTION_CHANGE_SCAN_RECEIVER_COLLAPSE,
    ACTION_CHANGE_SCAN_INFORMATION_ABOUT_CARGO_COLLAPSE,
    ACTION_CHANGE_SCAN_ORDER_NUMBER_INPUT,
    ACTION_CHANGE_SCAN_DATE_INPUT,
    ACTION_CHANGE_SCAN_ORDER_TYPE_INPUT,
    ACTION_CHANGE_SCAN_ORDER_MODE_DELIVERY_INPUT,
    ACTION_CHANGE_SCAN_ORDER_CITY_SENDER_INPUT,
    ACTION_CHANGE_SCAN_ORDER_CITY_RECEIVER_INPUT,
    ACTION_CHANGE_SCAN_ORDER_CONTRAGENT_SENDER_INPUT,
    ACTION_CHANGE_SCAN_ORDER_CONTRAGENT_RECEIVER_INPUT,
    ACTION_CHANGE_SCAN_ORDER_IS_OPEN_DROPDOWN_SENDER_FIO,
    ACTION_CHANGE_SCAN_ORDER_IS_OPEN_DROPDOWN_RECEIVER_FIO,
    ACTION_CHANGE_SCAN_ORDER_SENDER_FIO_INPUT,
    ACTION_CHANGE_SCAN_ORDER_RECEIVER_FIO_INPUT,
    ACTION_CHANGE_GET_PHONE_TYPES,
    ACTION_CHANGE_SET_PHONES,
    ACTION_CHANGE_SET_PASSPORT,
    ACTION_CHANGE_SET_PLACES

} from "../actions/actionConst";

import {getLocalStorage} from "../utils/getLocalStorage";
import moment from 'moment';

const order = {
    main: {
        orderNumber: '',
        date: moment(new Date()).format('DD.MM.YYYY'),
        orderType: 1,
        modeDelivery: 1
    },
    sender: {
        city: null,
        contragent: null,
        contactPerson: {
            name: '',
            passport: {
                type: '1',
                fields: [
                    {
                        alias: 'series',
                        mask: null,
                        value: '',
                        title: null
                    },
                    {
                        alias: 'number',
                        mask: null,
                        value: '',
                        title: null
                    }
                ]
            }
        },
        phones: []
    },
    receiver: {
        city: null,
        contragent: null,
        contactPerson: {
            name: '',
            passport: {
                type: '1',
                fields: [
                    {
                        alias: 'series',
                        mask: null,
                        value: '',
                        title: null
                    },
                    {
                        alias: 'number',
                        mask: null,
                        value: '',
                        title: null
                    }
                ]
            }
        },
        phones: []
    },
    cargo: {
        places: []
    }
}

const initState = {
    timeout: 10*60,

    isProgressGetTaskByKey: false,
    order,
    isGetOrderFromWork: false,
    isStopGetOrderFromWorkModal: false,
    movedFrom: 'journal',
    phoneTypes: [],

    mainCollapse: true,
    paymentInformationCollapse: true,
    totalCollapse: true,
    senderCollapse: true,
    receiverCollapse: true,
    informationAboutCargoCollapse: true,

    isOpenDropdownSenderFio: false,
    isOpenDropdownReceiverFio: false
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
        if (!action.payload) {
            newState.order = order;
        } else {
            newState.order = action.payload;
        }
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

    if (action.type === ACTION_CHANGE_SCAN_ORDER_NUMBER_INPUT) {
        newState.order.main.orderNumber = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_DATE_INPUT) {
        newState.order.main.date = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_ORDER_TYPE_INPUT) {
        newState.order.main.orderType = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_ORDER_MODE_DELIVERY_INPUT) {
        newState.order.main.modeDelivery = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_ORDER_CITY_SENDER_INPUT) {
        newState.order.sender.city = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_ORDER_CITY_RECEIVER_INPUT) {
        newState.order.receiver.city = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_ORDER_CONTRAGENT_SENDER_INPUT) {
        newState.order.sender.contragent = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_ORDER_CONTRAGENT_RECEIVER_INPUT) {
        newState.order.receiver.contragent = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_ORDER_IS_OPEN_DROPDOWN_SENDER_FIO) {
        newState.isOpenDropdownSenderFio = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_ORDER_IS_OPEN_DROPDOWN_RECEIVER_FIO) {
        newState.isOpenDropdownReceiverFio = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_ORDER_SENDER_FIO_INPUT) {
        newState.order.sender.contactPerson.name = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_ORDER_RECEIVER_FIO_INPUT) {
        newState.order.receiver.contactPerson.name = action.payload;
    }

    if (action.type === ACTION_CHANGE_GET_PHONE_TYPES) {
        newState.phoneTypes = action.payload;
    }

    if (action.type === ACTION_CHANGE_SET_PHONES) {
        // ничего не делаем
    }

    if (action.type === ACTION_CHANGE_SET_PASSPORT) {
        // ничего не делаем
    }

    if (action.type === ACTION_CHANGE_SET_PLACES) {
        // ничего не делаем
    }

    return newState;

}