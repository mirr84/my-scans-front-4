
const initialState = {

    showLoginModal: false,
    loading: false,
    suggestions: [],
    doLoginProgress: false,

    login: '',
    password: '',
    token: sessionStorage.token || '',

};

export default function user(state = initialState, action) {

    let newState = Object.assign({}, state);

    if (action.type === 'LOGIN_MODAL') {
        newState.showLoginModal = action.value;
        console.log('LOGIN_MODAL', newState);
    }

    if (action.type === 'CHANGE_LOGIN') {
        newState.login = action.login;
        console.log('CHANGE_LOGIN', newState);
    }

    if (action.type === 'CHANGE_PASSWORD') {
        newState.password = action.password;
        console.log('CHANGE_PASSWORD', newState);
    }

    if (action.type === 'CHANGE_LOGIN_REQUEST') {
        newState.loading = action.loading;
        newState.suggestions = action.suggestions;
        console.log('CHANGE_LOGIN_REQUEST', newState);
    }

    if (action.type === 'CHANGE_DO_LOGIN_REQUEST') {
        newState.login = action.login;
        newState.token = action.token;
        newState.doLoginProgress = action.progress;
        console.log('CHANGE_DO_LOGIN_REQUEST', newState);
    }

    if (action.type === 'CHANGE_DO_LOGOUT_REQUEST') {
        newState.login = '';
        newState.token = '';
        newState.password = '';
        //todo: уберу от сюда потом
        sessionStorage.token = '';
        console.log('CHANGE_DO_LOGOUT_REQUEST', newState);
    }

    return newState;

}
