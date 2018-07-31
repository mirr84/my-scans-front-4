import React, {Fragment} from 'react';
import {AsyncTypeahead} from "react-bootstrap-typeahead";
import {messages} from "../resources/js/utils";
import axios from "axios/index";
import {Button} from "reactstrap";

const makeAndHandleRequest = (value, props) => {

    const body = {
        apiName: "order",
        apiPath: "/catalog/cityAutocompleteGluedName",
        limit: 10,
        field: "term",
        value,
        lang: props.state.loginReducer.lang,
        user: {lang: props.state.loginReducer.lang, login: props.state.loginReducer.login}
    }

    return axios.post('/api/preback',
        {...body},
        {headers: {PWT: props.state.loginReducer.pwt}}
    )
        .then(
            resp => resp.data.items,
            err => {
                messages(err.response.data);
                return [];
            }
        )

}

const localization = {
    emptyLabel: 'Ничего не найдено',
    promptText: 'Начните набор',
    searchText: 'Обработка запроса'
}

export class AsyncCity extends React.Component {

    state = {
        isLoading: false,
        options: [],
    }

    _handleSearch = (query, props) => {
        this.setState({isLoading: true});
        makeAndHandleRequest(query, props)
            .then(
                (items) =>
                    this.setState({
                        isLoading: false,
                        options: items,
                    })
                );
    }

    render() {
        return (
                <AsyncTypeahead
                    {...this.props}
                    {...this.state}
                    {...localization}
                    align={'left'}
                    selected={ this.props.value && this.props.value.name ? [ this.props.value ]:[]}
                    labelKey={(option) => `${option.name}`}
                    minLength={1}
                    onSearch={(query) => this._handleSearch(query, this.props.props)}
                    placeholder={this.props.placeholder}
                    renderMenuItemChildren={
                        (option) => (
                            <div key={option.code}> {option.name} </div>
                        )
                    }
                    delay={500}
                    onChange={ (e) => { this.props.onChange(e[0]) } }
                    onInputChange={ (name) => this.props.onChange({name}) }
                />
        )
    }

}