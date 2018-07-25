import {messages} from "../resources/js/utils";
import axios from "axios";

export const cheakAuth = (props) => {
    axios.post('/api/auth/checkLogin', {lang: 'rus'}, {headers: {PWT: props.state.loginReducer.pwt}})
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
