import React from 'react';

import {connector} from "../store/utils/connector";
import {Button} from "reactstrap";
import {doFilter} from "./serviceJournal";


const RequestFilter = ({state, dispatch}) =>
    (
        <div>

            <Button color="success"
                    onClick={
                        () => {
                            // очищаем журнал

                            // лочим форму

                            // делаем запрос
                            doFilter({state, dispatch});
                        }
                    }
            >
                Поиск
            </Button>

        </div>
    )

export default connector(RequestFilter);