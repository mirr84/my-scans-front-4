import {messages} from "../resources/js/utils";
import axios from "axios";

export const getTaskByKey = (props, movedFrom = 'journal') => {

    const body = {
        apiName:"orderPhoto",
        apiPath:"/getTaskByKey",
        field:"request",
        value: props.state.journalReducer.selectRowCode,
        lang: props.state.loginReducer.lang,
        user: {lang: props.state.loginReducer.lang, login: props.state.loginReducer.login}
    }

    props.dispatch.changeIsGetTaskByKeyProgress(true);

    axios.post('/api/preback',
        {...body},
        {headers: {PWT: props.state.loginReducer.pwt}}
    )
        .then(
            resp => {
                props.dispatch.changeSetOrderData(resp.data.order);
                props.dispatch.changeMenuItem('scan');
                props.dispatch.changeMovedFrom(movedFrom);
                props.dispatch.changeIsGetOrderFromWork(true);
            },
            err => {
                messages(err.response.data);
            }
        )
        .then(
            () => props.dispatch.changeIsGetTaskByKeyProgress(false)
        )

}