import {ACTION_LOGOUT, ACTION_CHANGE_JOURNAL_FILTER_COLLAPSE, ACTION_CHANGE_DATA_JOURNAL, ACTION_CHANGE_SELECT_ROW_JOURNAL} from "../actions/actionConst";
import {getLocalStorage} from "../utils/getLocalStorage";

const initState = {
    collapse: true,
    data: {
        items: []
    },
    selectRowCode: null
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

    return newState;

}