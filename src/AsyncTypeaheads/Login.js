import React from 'react';
import {AsyncTypeahead} from "react-bootstrap-typeahead";
import {messages} from "../resources/js/utils";
import axios from "axios/index";

const localization = {
    emptyLabel: 'Ничего не найдено',
    promptText: 'Начните набор',
    searchText: 'Обработка запроса'
}

const makeAndHandleRequest = (value, props) => {

    const body = {
        filter: {
            name: value
        },
        paging: {
            size: 10,
            offset: 0
        },
        lang: props.state.loginReducer.lang,
        user: {
            lang: props.state.loginReducer.lang
        }
    }

    return axios.post('/api/auth/getLoginList',
        {...body}
    )
        .then(
            resp => resp.data.items,
            err => {
                messages(err.response.data);
                return [];
            }
        )

}

export class AsyncLogin extends React.Component {

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
                        options: items.map( item => item.login)
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
                selected={this.props.value ? [this.props.value] : []}
                labelKey={(option) => `${option}`}
                minLength={1}
                onSearch={(query) => this._handleSearch(query, this.props.props)}
                placeholder={this.props.placeholder}
                renderMenuItemChildren={
                    (option) => (
                        <div key={option}> {option} </div>
                    )
                }
                delay={500}
                onChange={(e) => {
                    this.props.onChange(e[0])
                }}
                onInputChange={(name) => this.props.onChange(name)}
            />
        )
    }

}
