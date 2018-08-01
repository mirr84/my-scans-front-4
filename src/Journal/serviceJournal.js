import {messages} from "../resources/js/utils";
import axios from "axios";

export const LIMIT_ROW_PAGE = 50;

export const doFilter = (props, isUnSelect = true, size = LIMIT_ROW_PAGE) => {

    let body = {
        apiName: "orderPhoto",
        apiPath: "/getJournal",
        limit: size,
        offset: 0,
        fields: [
            {field: "status", values: props.state.journalReducer.selectStatus.map(item => item.value)},
            {field: "courierCity", value: props.state.journalReducer.courierCity ? props.state.journalReducer.courierCity.code : null},
            {field: "courier", value: props.state.journalReducer.courier ? props.state.journalReducer.courier.code: null},
            {field: "number", value: props.state.journalReducer.number},
            {field: "dateFrom", value: props.state.journalReducer.dateFrom},
            {field: "dateTo", value: props.state.journalReducer.dateTo},
            {field: "onlyUrgent", value: props.state.journalReducer.onlyUrgent}
        ],
        columns: ["code", "number", "recipient", "courier", "status", "courierCity", "date"],
        sort: [],
        lang: props.state.loginReducer.lang,
        user: {lang: props.state.loginReducer.lang, login: props.state.loginReducer.login}
    }

    props.dispatch.changeIsJournalProgress(true);

    axios.post('/api/preback',
        {...body},
        {headers: {PWT: props.state.loginReducer.pwt}}
    )
        .then(
            resp => {
                props.dispatch.changeDataJournal(resp.data);
                if (isUnSelect === true)
                    props.dispatch.changeSelectRowJournal(null);
                messages(resp.data);
            },
            err => {
                messages(err.response.data);
            }
        )
        .then(
            () => props.dispatch.changeIsJournalProgress(false)
        )

}

export const getImage = (value, props) => {

    props.dispatch.changeJournalImageProgress(true);

    let body = {
        apiName: "orderPhoto",
        apiPath: "/getPhoto",
        lang: props.state.loginReducer.lang,
        user: {lang: props.state.loginReducer.lang, login: props.state.loginReducer.login},
        value // props.state.journalReducer.selectRowCode
    }

    axios.post('/api/preback',
        {...body},
        {headers: {PWT: props.state.loginReducer.pwt}}
    )
        .then(
            resp => {
                props.dispatch.changeJournalImage(resp.data);
            },
            err => {
                props.dispatch.changeJournalImage(null);
                messages(err.response.data);
            }
        )
        .then(
            resp => props.dispatch.changeJournalImageProgress(false)
        )

}

export const getRephotoReasons = (props) => {

    let body = {
        apiName: "orderPhoto",
        apiPath: "/getRephotoReasons",
        lang: props.state.loginReducer.lang,
        user: {lang: props.state.loginReducer.lang, login: props.state.loginReducer.login}
    }

    axios.post('/api/preback',
        {...body},
        {headers: {PWT: props.state.loginReducer.pwt}}
    )
        .then(
            resp => {
                props.dispatch.changeRephotoReasonsList(resp.data.items);
            },
            err => {
                props.dispatch.changeIsShowRePhotographedModal(false);
                messages(err.response.data);
            }
        )

}

export const operationRephoto = (props) => {

    let value = null;
    if (props.state.menuReducer.item === 'scan') value = props.state.scanReducer.order.main.request;
    if (props.state.menuReducer.item === 'journal') value = props.state.journalReducer.selectRowCode;

    let body = {
        apiName: "orderPhoto",
        apiPath: "/operationRephoto",
        field: "request",
        value,
        fields: [
            {
                field: "reason_code",
                values: props.state.journalReducer.selectReasonCode
            },
            {
                field: "other_reason",
                value: props.state.journalReducer.otherReason
            }
        ],
        lang: props.state.loginReducer.lang,
        user: {lang: props.state.loginReducer.lang, login: props.state.loginReducer.login}
    }

    axios.post('/api/preback',
        {...body},
        {headers: {PWT: props.state.loginReducer.pwt}}
    )
        .then(
            resp => {
                messages(resp.data);
                props.dispatch.changeIsShowRePhotographedModal(false);
                props.dispatch.changeMenuItem(props.state.scanReducer.movedFrom);
                props.dispatch.changeIsGetOrderFromWork(false);
                props.dispatch.changeSetOrderData(null);
                doFilter(props, false);
            },
            err => {
                messages(err.response.data);
            }
        )

}

export const getStatusList = (props) => {

    let body = {
        apiName:"orderPhoto",
        apiPath:"/getStatusList",
        lang: props.state.loginReducer.lang,
        user: {lang: props.state.loginReducer.lang, login: props.state.loginReducer.login}
    }

    axios.post('/api/preback',
        {...body},
        {headers: {PWT: props.state.loginReducer.pwt}}
    )
        .then(
            resp => {
                props.dispatch.changeGetStatusList(resp.data.items);
                props.dispatch.changeSelectStatus(
                    resp.data.items
                        .filter( item => item.select === true )
                        .map( item => ({ value: item.code, label: item.name }) )
                );
            },
            err => {
                props.dispatch.changeSelectStatus([]);
                messages(err.response.data);
            }
        )

}