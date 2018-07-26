import {messages} from "../resources/js/utils";
import axios from "axios";

export const doFilter = (props) => {

    let body = {
        apiName: "orderPhoto",
        apiPath: "/getJournal",
        limit: 100,
        offset: 0,
        fields: [
            {field: "status", values: ["not_treated"]},
            {field: "courierCity", value: null},
            {field: "courier", value: null},
            {field: "number", value: null},
            {field: "dateFrom", value: "25.06.2018" },
            {field: "dateTo", value: "25.07.2018"},
            {field: "onlyUrgent", value: false}
        ],
        columns: ["code", "number", "recipient", "courier", "status", "courierCity", "date"],
        sort: [],
        lang: props.state.loginReducer.lang,
        user: {lang: props.state.loginReducer.lang, login: props.state.loginReducer.login}
    }

    axios.post('/api/preback',
        {...body},
        {headers: {PWT: props.state.loginReducer.pwt}}
    )
        .then(
            resp => {
                props.dispatch.changeDataJournal(resp.data);
                props.dispatch.changeSelectRowJournal(null);
            },
            err => {
                messages(err.response.data);
            }
        )

}

export const getImage = (props) => {

    props.dispatch.changeJournalImageProgress(true);

    let body = {
        apiName: "orderPhoto",
        apiPath: "/getPhoto",
        lang: props.state.loginReducer.lang,
        user: {lang: props.state.loginReducer.lang, login: props.state.loginReducer.login},
        value: props.state.journalReducer.selectRowCode
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