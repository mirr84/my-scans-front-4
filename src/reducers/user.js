
const initialState = {

    showLoginModal: false,
    loading: false,
    suggestions: [],

    login: '',
    password: '',
    token: '',

};

export default function user(state = initialState, action) {

    let newState = Object.assign({}, state);

    if (action.type === 'LOGIN_MODAL') {
        newState.showLoginModal = action.value;
        console.log('LOGIN_MODAL', newState);
    }

    if (action.type === 'CHANGE_LOGIN') {
        newState.login = action.value;
        console.log('CHANGE_LOGIN', newState);
    }

    if (action.type === 'CHANGE_LOGIN_REQUEST') {
        newState.loading = action.loading;
        newState.suggestions = action.suggestions;
        console.log('CHANGE_LOGIN_REQUEST', newState);
    }

    return newState;

}
