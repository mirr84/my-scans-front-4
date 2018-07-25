import {
    actionChangeMenuCollapse, actionChangeMenuItem,
    actionChangeIsAuth, actionChangeIsShowModal
} from "./actions/actions";

export const dispatchs = (dispatch) =>
    (
        {
            dispatch:
                {

                    changeMenuCollapse: (v) => dispatch(actionChangeMenuCollapse(v)),
                    changeMenuItem: (v) => dispatch(actionChangeMenuItem(v)),

                    changeIsAuth: (v) => dispatch(actionChangeIsAuth(v)),
                    changeIsShowModal: (v) => dispatch(actionChangeIsShowModal(v)),

                }
        }
    )