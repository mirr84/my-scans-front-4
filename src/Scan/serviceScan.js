import {messages} from "../resources/js/utils";
import axios from "axios";
import {toast} from "react-toastify";
import {getImage} from "../Journal/serviceJournal";

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
                props.dispatch.changeMovedFrom(props.state.menuReducer.item);
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

export const getTaskAndLock = (props, movedFrom = 'journal') => {

    const body = {
        apiName:"orderPhoto",
        apiPath:"/getTaskAndLock",
        field:"request",
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
                props.dispatch.changeMovedFrom(props.state.menuReducer.item);
                props.dispatch.changeIsGetOrderFromWork(true);
                getImage(resp.data.order.main.request, props)
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

    let value = null;
    if (props.state.menuReducer.item === 'scan') value = props.state.scanReducer.order.main.request;
    if (props.state.menuReducer.item === 'journal') value = props.state.journalReducer.selectRowCode;

    const body = {
        apiName: "orderPhoto",
        apiPath: "/operationStop",
        field: "request",
        value,
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
                props.dispatch.changeSetOrderData(null);
                props.dispatch.changeMenuItem(props.state.scanReducer.movedFrom);
                props.dispatch.changeIsGetOrderFromWork(false);
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