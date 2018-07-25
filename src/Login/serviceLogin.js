import {messages} from "../resources/js/utils";
import axios from "axios";

export const checkLogin = (props) => {
    axios.post('/api/auth/checkLogin',
        {lang: props.state.loginReducer.lang},
        {headers: {PWT: props.state.loginReducer.pwt}}
    )
        .then(
            resp => {
                props.dispatch.changeIsShowModal(false);
                props.dispatch.changeIsAuth(true);
            },
            err => {
                messages(err.response.data);
                props.dispatch.changeIsShowModal(true);
                props.dispatch.changeIsAuth(false);
            }
        )
}

export const doLogin = (props) => {

    axios.post('/api/auth/login',
        {
            login: props.state.loginReducer.login,
            password: props.state.loginReducer.password,
            lang: props.state.loginReducer.lang
        })
        .then(
            resp => {
                props.dispatch.changePwt(resp.headers.pwt);
                props.dispatch.changeIsAuth(true);
                props.dispatch.changeIsShowModal(false);
                props.dispatch.changePasswordInput('');
            },
            err => {
                props.dispatch.changePwt(null);
                props.dispatch.changePasswordInput('');
                messages(err.response.data);
            }
        )

}
