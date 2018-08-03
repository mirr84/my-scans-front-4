import {messages} from "../resources/js/utils";
import axios from "axios";
import {toast} from "react-toastify";
import {getImage} from "../Journal/serviceJournal";

export const getTaskByKey = (props, movedFrom = 'journal') => {

    const body = {
        apiName: "orderPhoto",
        apiPath: "/getTaskByKey",
        field: "request",
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
        apiName: "orderPhoto",
        apiPath: "/getTaskAndLock",
        field: "request",
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
            () => {
            }
        )

}

export const getPhoneTypes = (props) =>
    new Promise(
        (resolve, reject) => resolve([
            {
                code: 'mob',
                name: 'Мобильный'
            },
            {
                code: 'tel',
                name: 'Городской'
            },
            {
                code: 'fax',
                name: 'Факс'
            }
        ])
    )
        .then(
            r => props.dispatch.changeGetPhoneTypes(r)
        )

export const getCurrency = (props) => {

    const body = {
        apiName: "orderPhoto",
        apiPath: "/getCurrency",
        order: props.state.scanReducer.order,
        lang: props.state.loginReducer.lang,
        user: {lang: props.state.loginReducer.lang, login: props.state.loginReducer.login}
    }

    props.dispatch.changeIsProgressCurrency(true);

    axios.post('/api/preback',
        {...body},
        {headers: {PWT: props.state.loginReducer.pwt}}
    )
        .then(
            resp => resp.data,
            err => err.response.data
        )
        .then(
            resp => {
                props.dispatch.changeIsProgressCurrency(false);
                props.dispatch.changeSetOrderCurrencyData(resp);
                console.log(resp);
            },
        )
}

export const getCalculationAndAdditionalServices = (props) => {

    const body = {
        apiName: "orderPhoto",
        apiPath: "/getCalculationAndAdditionalServices",
        order: props.state.scanReducer.order,
        lang: props.state.loginReducer.lang,
        user: {lang: props.state.loginReducer.lang, login: props.state.loginReducer.login}
    }

    props.dispatch.changeIsProgressCalculationAndAdditionalServices(true);

    axios.post('/api/preback',
        {...body},
        {headers: {PWT: props.state.loginReducer.pwt}}
    )
        .then(
            resp => resp.data,
            err => err.response.data
        )
        .then(
            resp => {
                props.dispatch.changeSetOrderCalculationAndAdditionalServicesData({additionalServices: resp.order.services.additionalServices, calculator: resp.order.calculator });
                props.dispatch.changeIsProgressCalculationAndAdditionalServices(false);
            },
        )

}

export const getServiceList = (props) => {

    const body = {
        apiName: "orderPhoto",
        apiPath: "/getServiceList",
        order: props.state.scanReducer.order,
        lang: props.state.loginReducer.lang,
        user: {lang: props.state.loginReducer.lang, login: props.state.loginReducer.login}
    }

    props.dispatch.changeIsProgressTariffs(true);

    axios.post('/api/preback',
        {...body},
        {headers: {PWT: props.state.loginReducer.pwt}}
    )
        .then(
            resp => resp.data,
            err => err.response.data
        )
        .then(
            resp => {
                props.dispatch.changeSetOrderTariffsData(resp.order.services.tariffs);
                props.dispatch.changeIsProgressTariffs(false);
                getCalculationAndAdditionalServices(props);
                messages(resp);
            },
        )

}