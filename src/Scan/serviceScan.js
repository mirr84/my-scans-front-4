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
        {...body}
    )
        .then(
            resp => {
                props.dispatch.changeSetOrderData(null);
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
        {...body}
    )
        .then(
            resp => {
                props.dispatch.changeSetOrderData(null);
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
        {...body}
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
        {...body}
    )
        .then(
            resp => resp.data,
            err => err.response.data
        )
        .then(
            resp => {
                props.dispatch.changeIsProgressCurrency(false);
                props.dispatch.changeSetOrderCurrencyData(resp);
            },
        )
}

export const getCalculationAndAdditionalServices = (props, onlyCalc = false) => {

    const body = {
        apiName: "orderPhoto",
        apiPath: "/getCalculationAndAdditionalServices",
        order: props.state.scanReducer.order,
        lang: props.state.loginReducer.lang,
        user: {lang: props.state.loginReducer.lang, login: props.state.loginReducer.login}
    }

    if (!onlyCalc) props.dispatch.changeIsProgressAdditionalServices(true);
    props.dispatch.changeIsProgressCalculation(true);

    axios.post('/api/preback',
        {...body}
    )
        .then(
            resp => resp.data,
            err => err.response.data
        )
        .then(
            resp => {
                props.dispatch.changeSetOrderCalculationAndAdditionalServicesData({
                    additionalServices: !onlyCalc ? resp.order.services.additionalServices : null,
                    calculator: resp.order.calculator
                });
                if (!onlyCalc) {
                    props.dispatch.changeIsProgressAdditionalServices(false);
                } else {
                    messages(resp);
                }

                props.dispatch.changeIsProgressCalculation(false);
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
        {...body}
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

export const isExistsOrderNumber = (props) => {

    if (props && props.state && props.state.scanReducer && props.state.scanReducer && props.state.scanReducer.order && props.state.scanReducer.order.main) {
        if (props.state.scanReducer.order.main.orderNumber && props.state.scanReducer.order.main.request) {

            const body = {
                apiName: "orderPhoto",
                apiPath: "/isExistsOrderNumber",
                field: "orderNumber",
                value: props.state.scanReducer.order.main.orderNumber,
                lang: props.state.loginReducer.lang,
                user: {lang: props.state.loginReducer.lang, login: props.state.loginReducer.login}
            }

            props.dispatch.changeIsProgressIsExistsOrderNumber(true);
            props.dispatch.changeIsIsExistsOrderNumber(false);

            axios.post('/api/preback',
                {...body}
            )
                .then(
                    resp => {
                        props.dispatch.changeIsIsExistsOrderNumber(true);
                    },
                    err => {
                        props.dispatch.changeIsIsExistsOrderNumber(false);
                    }
                )
                .then(
                    resp => {
                        props.dispatch.changeIsProgressIsExistsOrderNumber(false);
                    }
                )

        }
    }

}

export const operationLinkFirstWithOrder = (props) => {

    const body = {
        apiName: "orderPhoto",
        apiPath: "/operationLinkFirstWithOrder",
        fields: [
            {field: "orderNumber", value: props.state.scanReducer.order.main.orderNumber},
            {field: "request", value: props.state.scanReducer.order.main.request}
        ],
        lang: props.state.loginReducer.lang,
        user: {lang: props.state.loginReducer.lang, login: props.state.loginReducer.login}
    }

    axios.post('/api/preback',
        {...body}
    )
        .then(
            resp => {
                getTaskAndLock(props, props.state.menuReducer.item);
                return resp.data;
            },
            err => err.response.data
        )
        .then(
            resp => {
                messages(resp);
            },
        )

}

export const genPvzList = (props) => {

    const body = {
        apiName: "pvz",
        apiPath: "/deliveryPoint",
        filter: {city: props.state.scanReducer.order.receiver.city },
        lang: props.state.loginReducer.lang,
        user: {lang: props.state.loginReducer.lang, login: props.state.loginReducer.login}
    }

    axios.post('/api/preback',
        {...body}
    )
        .then(
            resp => {
                props.dispatch.changeSetPvzList(resp.data.items);
                return resp.data;
            },
            err => err.response.data
        )
        .then(
            resp => {
                messages(resp);
            },
        )

}

export const handleTask = (props) => {

    const body = {
        apiName: "orderPhoto",
        apiPath: "/handleTask",
        order: props.state.scanReducer.order,
        lang: props.state.loginReducer.lang,
        user: {lang: props.state.loginReducer.lang, login: props.state.loginReducer.login}
    }

    axios.post('/api/preback',
        {...body}
    )
        .then(
            resp => {
                return resp.data;
            },
            err => err.response.data
        )
        .then(
            resp => {
                messages(resp);
            },
        )

}
