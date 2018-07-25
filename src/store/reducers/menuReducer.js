import {ACTION_LOGOUT, ACTION_MENU_COLLAPSE, ACTION_MENU_ITEM} from "../actions/actionConst";
import {getLocalStorage} from "../utils/getLocalStorage";

const initState = {
    collapse: false,
    item: 'journal'
}

export const menuReducer = (state = getLocalStorage('menuReducer', initState), action) => {

    let newState = Object.assign({}, state);

    if (action.type === ACTION_LOGOUT) {
        newState = initState;
    }

    if (action.type === ACTION_MENU_COLLAPSE) {
        newState.collapse = action.payload;
    }

    if (action.type === ACTION_MENU_ITEM) {
        newState.item = action.payload;
    }

    return newState;

}