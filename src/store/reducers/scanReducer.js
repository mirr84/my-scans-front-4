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
    ACTION_CHANGE_SET_PLACES,
    ACTION_IS_SET_TIMEOUT_WORK,
    ACTION_CHANGE_SCAN_ORDER_CONTRAGENT_OTHER_INPUT,
    ACTION_CHANGE_SCAN_ORDER_PAYER_PAY_TYPE,
    ACTION_CHANGE_SCAN_ORDER_PAYER_TYPE,
    ACTION_CHANGE_SCAN_ORDER_TARIFFS_DATA,
    ACTION_CHANGE_IS_PROGRESS_TARIFFS,
    ACTION_CHANGE_IS_PROGRESS_ADDITIONAL_SERVICE,
    ACTION_CHANGE_SCAN_ORDER_CALCULATION_AND_ADDITIONAL_SERVICE,
    ACTION_CHANGE_IS_PROGRESS_CURRENCY,
    ACTION_CHANGE_CURRENCY,
    ACTION_CHANGE_IS_PROGRESS_CALCULATION,
    ACTION_CHANGE_PARAMS_ADDITIONAL_SERVICES_INPUT,
    ACTION_CHANGE_IS_PROGRESS_IS_EXISTS_ORDER_NUMBER,
    ACTION_CHANGE_IS_EXISTS_ORDER_NUMBER,
    ACTION_CHANGE_SCAN_ORDER_PVZ_INPUT,
    ACTION_CHANGE_SET_PVZ_LIST,
    ACTION_CHANGE_ADDRESS_INPUT

} from "../actions/actionConst";

import {getLocalStorage} from "../utils/getLocalStorage";
import moment from 'moment';
import {actionChangeIsProgressIsExistsOrderNumber} from "../actions/actions";

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
            },
            address: {
                zipCode: '',
                street: '',
                house: '',
                flat: ''
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
            },
            address: {
                zipCode: '',
                street: '',
                house: '',
                flat: ''
            }
        },
        phones: [],
        pvz: null
    },
    cargo: {
        places: []
    },
    other: {
        contragent: null
    },
    payer: {
        payType: '', // cash, avans, by_contract
        type: '' // sender, receiver, other
    },
    services: {
        tariffs: [],
        additionalServices: []
    },
    currency: {},
    calculator: {}
}

const initState = {
    timeout: 0,

    isProgressTariffs: false,
    isProgressAdditionalServices: false,
    isProgressCalculation: false,
    isProgressCurrency: false,
    isProgressIsExistsOrderNumber: false,
    isProgressGetTaskByKey: false,

    isExistsOrderNumber: false,

    order: Object.assign({}, order),
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
    isOpenDropdownReceiverFio: false,

    pvzList: []

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
        newState.order = Object.assign({}, order);
        if (action.payload) {
            newState.order = action.payload;
        }
        if (!newState.order.main.date) {
            newState.order.main.date = moment(new Date()).format('DD.MM.YYYY');
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
        newState.order.receiver.pvz = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_ORDER_PVZ_INPUT) {
        newState.order.receiver.pvz = action.payload;
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

    if (action.type === ACTION_IS_SET_TIMEOUT_WORK) {
        newState.timeout = action.payload;
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

    if (action.type === ACTION_CHANGE_SCAN_ORDER_CONTRAGENT_OTHER_INPUT) {
        newState.order.other.contragent = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_ORDER_PAYER_PAY_TYPE) {
        newState.order.payer.payType = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_ORDER_PAYER_TYPE) {
        newState.order.payer.type = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_ORDER_TARIFFS_DATA) {
        newState.order.services.tariffs = action.payload;
    }

    if (action.type === ACTION_CHANGE_IS_PROGRESS_TARIFFS) {
        newState.isProgressTariffs = action.payload;
    }

    if (action.type === ACTION_CHANGE_IS_PROGRESS_ADDITIONAL_SERVICE) {
        newState.isProgressAdditionalServices = action.payload;
    }

    if (action.type === ACTION_CHANGE_IS_PROGRESS_CALCULATION) {
        newState.isProgressCalculation = action.payload;
    }

    if (action.type === ACTION_CHANGE_SCAN_ORDER_CALCULATION_AND_ADDITIONAL_SERVICE) {
        if (action.payload.additionalServices) newState.order.services.additionalServices = action.payload.additionalServices;
        newState.order.calculator = action.payload.calculator;
    }

    if (action.type === ACTION_CHANGE_IS_PROGRESS_CURRENCY) {
        newState.isProgressCurrency = action.payload;
    }

    if (action.type === ACTION_CHANGE_CURRENCY) {
        newState.order.currency = action.payload;
    }

    if (action.type === ACTION_CHANGE_PARAMS_ADDITIONAL_SERVICES_INPUT) {
        // ничего не делаем
    }

    if (action.type === ACTION_CHANGE_IS_PROGRESS_IS_EXISTS_ORDER_NUMBER) {
        newState.isProgressIsExistsOrderNumber = action.payload;
    }

    if (action.type === ACTION_CHANGE_IS_EXISTS_ORDER_NUMBER) {
        newState.isExistsOrderNumber = action.payload;
    }

    if (action.type === ACTION_CHANGE_SET_PVZ_LIST) {
        newState.pvzList = action.payload;
    }

    if (action.type === ACTION_CHANGE_ADDRESS_INPUT) {
    }

    return newState;

}
