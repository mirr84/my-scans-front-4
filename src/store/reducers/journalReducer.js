import {
    ACTION_LOGOUT,
    ACTION_CHANGE_JOURNAL_FILTER_COLLAPSE,
    ACTION_CHANGE_DATA_JOURNAL,
    ACTION_CHANGE_SELECT_ROW_JOURNAL,
    ACTION_CHANGE_JOURNAL_IMAGE,
    ACTION_CHANGE_ZOOM_IMAGE_JOURNAL,
    ACTION_CHANGE_JOURNAL_IMAGE_PROGRESS,
    ACTION_IS_SHOW_RE_PHOTOGRAPHED_MODAL,
    ACTION_CHANGE_REPHOTO_REASONS_LIST,
    ACTION_CHANGE_REASONS_ITEM,
    ACTION_CHANGE_CLEAN_REASONS_ITEM,
    ACTION_CHANGE_OTHER_REASONS,
    ACTION_CHANGE_STATUS_LIST,
    ACTION_CHANGE_SELECT_STATUS,
    ACTION_CHANGE_DATE_FROM_FILTER,
    ACTION_CHANGE_DATE_TO_FILTER,
    ACTION_CHANGE_IS_JOURNAL_PROGRESS,
    ACTION_CHANGE_JOURNAL_COURIER_CITY_INPUT,
    ACTION_CHANGE_JOURNAL_ORDER_NUMBER_INPUT,
    ACTION_CHANGE_JOURNAL_COURIER_INPUT,
    ACTION_CHANGE_JOURNAL_ONLY_UNGENT_INPUT

} from "../actions/actionConst";
import {getLocalStorage} from "../utils/getLocalStorage";
import moment from 'moment';

const initState = {

    // filter
    collapse: true,
    statusList: [],
    selectStatus: [],

    dateFrom: moment(new Date()).format('DD.MM.YYYY'),
    dateTo: moment(new Date()).format('DD.MM.YYYY'),

    courierCity: null,
    courier: null,
    number: '',
    onlyUrgent: false,

    // journal
    isProgressFilter: false,
    data: {
        items: []
    },
    selectRowCode: null,

    // image
    imageData: null,
    imageZoom: false,
    imageProgress: false,

    // перефото
    isShowModal: false,
    reasonsList: [],
    selectReasonCode: [],
    otherReason: '',

}

export const journalReducer = (state = getLocalStorage('journalReducer', initState), action) => {

    let newState = Object.assign({}, state);

    if (action.type === ACTION_LOGOUT) {
        newState = initState;
    }

    if (action.type === ACTION_CHANGE_JOURNAL_FILTER_COLLAPSE) {
        newState.collapse = action.payload;
    }

    if (action.type === ACTION_CHANGE_DATA_JOURNAL) {
        newState.data = action.payload;
    }

    if (action.type === ACTION_CHANGE_SELECT_ROW_JOURNAL) {
        newState.selectRowCode = action.payload;
    }

    if (action.type === ACTION_CHANGE_JOURNAL_IMAGE) {
        newState.imageData = action.payload;
    }

    if (action.type === ACTION_CHANGE_ZOOM_IMAGE_JOURNAL) {
        newState.imageZoom = action.payload;
    }

    if (action.type === ACTION_CHANGE_JOURNAL_IMAGE_PROGRESS) {
        newState.imageProgress = action.payload;
    }

    if (action.type === ACTION_IS_SHOW_RE_PHOTOGRAPHED_MODAL) {
        newState.isShowModal = action.payload;
    }

    if (action.type === ACTION_CHANGE_REPHOTO_REASONS_LIST) {
        newState.reasonsList = action.payload;
    }

    if (action.type === ACTION_CHANGE_REASONS_ITEM) {
        if (!newState.selectReasonCode || !Array.isArray(newState.selectReasonCode)) newState.selectReasonCode = [];
        if (newState.selectReasonCode.filter( item => item === action.payload ).length === 0 ) {
            newState.selectReasonCode.push(action.payload);
        } else {
            newState.selectReasonCode = newState.selectReasonCode.filter( item => item !== action.payload);
        }
    }

    if (action.type === ACTION_CHANGE_CLEAN_REASONS_ITEM) {
        newState.selectReasonCode = [];
        newState.otherReason = '';
    }

    if (action.type === ACTION_CHANGE_OTHER_REASONS) {
        newState.otherReason = action.payload;
    }

    if (action.type === ACTION_CHANGE_STATUS_LIST) {
        newState.statusList = action.payload;
    }

    if (action.type === ACTION_CHANGE_SELECT_STATUS) {
        newState.selectStatus = action.payload;
    }

    if (action.type === ACTION_CHANGE_DATE_FROM_FILTER) {
        newState.dateFrom = action.payload;
    }

    if (action.type === ACTION_CHANGE_DATE_TO_FILTER) {
        newState.dateTo = action.payload;
    }

    if (action.type === ACTION_CHANGE_IS_JOURNAL_PROGRESS) {
        newState.isProgressFilter = action.payload;
    }

    if (action.type === ACTION_CHANGE_JOURNAL_COURIER_CITY_INPUT) {
        newState.courierCity = action.payload;
    }

    if (action.type === ACTION_CHANGE_JOURNAL_ORDER_NUMBER_INPUT) {
        newState.number = action.payload;
    }

    if (action.type === ACTION_CHANGE_JOURNAL_COURIER_INPUT) {
        newState.courier = action.payload;
    }

    if (action.type === ACTION_CHANGE_JOURNAL_ONLY_UNGENT_INPUT) {
        newState.onlyUrgent = action.payload;
    }

    return newState;

}