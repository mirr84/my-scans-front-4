import {messages} from "../resources/js/utils";
import axios from "axios";
import {toast} from "react-toastify";

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

export const operationStop = (props) => {

    const body = {
        apiName: "orderPhoto",
        apiPath: "/operationStop",
        field: "request",
        value: props.state.journalReducer.selectRowCode,
        lang: props.state.loginReducer.lang,
        user: {lang: props.state.loginReducer.lang, login: props.state.loginReducer.login}
    }

    axios.post('/api/preback',
        {...body},
        {headers: {PWT: props.state.loginReducer.pwt}}
    )
        .then(
            resp => {
                props.dispatch.changeIsStopGetOrderFromWorkModal(false);
                props.dispatch.changeIsGetOrderFromWork(false);
                props.dispatch.changeSetOrderData(null);
                props.dispatch.changeMenuItem(props.state.scanReducer.movedFrom);
                toast.info('Внос текущего задания остановлено');
            },
            err => {
                messages(err.response.data);
            }
        )
        .then(
            () => {}
        )

}