import {ACTION_LOGOUT, ACTION_CHANGE_JOURNAL_FILTER_COLLAPSE} from "../actions/actionConst";
import {getLocalStorage} from "../utils/getLocalStorage";

const initState = {
    collapse: true
}

export const journalReducer = (state = getLocalStorage('journalReducer', initState), action) => {

    let newState = Object.assign({}, state);

    if (action.type === ACTION_LOGOUT) {
        newState = initState;
    }

    if (action.type === ACTION_CHANGE_JOURNAL_FILTER_COLLAPSE) {
        newState.collapse = action.payload;
    }

    return newState;

}