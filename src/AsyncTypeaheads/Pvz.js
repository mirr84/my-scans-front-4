import React from 'react';
import {Typeahead} from "react-bootstrap-typeahead";

const localization = {
    emptyLabel: 'Ничего не найдено',
    promptText: 'Начните набор',
    searchText: 'Обработка запроса'
}

export class ListPvz extends React.Component {

    state = {
        options: [],
    }

    render() {

        this.state = {
            options: this.props.props.state.scanReducer.pvzList,
        }

        return (
            <Typeahead
                {...localization}
                {...this.props}
                labelKey="name"
                defaultSelected={ this.state.options.filter( item => item.code === this.props.value ) }
                options={this.state.options}
                onChange={ (e) => { this.props.onChange( (e && Array.isArray(e) && e.length>0) ? e[0].code : null ) } }
                placeholder="ПВЗ"
            />
        )
    }

}
