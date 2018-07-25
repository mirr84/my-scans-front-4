import {ACTION_IS_AUTH, ACTION_IS_SHOW_MODAL} from "../actions/actionConst";

const initState = {
    login: null,
    password: null,
    pwt: null,
    isAuth: false,
    isShowModal: true
}

export const loginReducer = (state = initState, action) => {

    let newState = Object.assign({}, state);

    if (action.type === ACTION_IS_AUTH) {
        newState.isAuth = action.payload;
    }

    if (action.type === ACTION_IS_SHOW_MODAL) {
        newState.isShowModal = action.payload;
    }

    return newState;

}