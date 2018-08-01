import {ACTION_IS_AUTH, ACTION_IS_SHOW_MODAL, ACTION_CHANGE_LOGIN_INPUT, ACTION_CHANGE_PASSWORD_INPUT, ACTION_CHANGE_PWT, ACTION_LOGOUT} from "../actions/actionConst";
import {getLocalStorage} from "../utils/getLocalStorage";

const initState = {
    lang: 'rus',
    login: '',
    password: '',
    pwt: null,
    isAuth: false,
    isShowModal: true
}

export const loginReducer = (state = getLocalStorage('loginReducer', initState), action) => {

    let newState = Object.assign({}, state);

    if (action.type === ACTION_LOGOUT) {
        newState = initState;
    }

    if (action.type === ACTION_CHANGE_LOGIN_INPUT) {
        newState.login = action.payload;
    }

    if (action.type === ACTION_CHANGE_PASSWORD_INPUT) {
        newState.password = action.payload;
    }

    if (action.type === ACTION_IS_AUTH) {
        newState.isAuth = action.payload;
    }

    if (action.type === ACTION_IS_SHOW_MODAL) {
        newState.isShowModal = action.payload;
    }

    if (action.type === ACTION_CHANGE_PWT) {
        newState.pwt = action.payload;
    }

    return newState;

}