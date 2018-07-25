import {
    actionChangeMenuCollapse, actionChangeMenuItem, actionChangeLogOut,
    actionChangeIsAuth, actionChangeIsShowModal, actionChangeLoginInput, actionChangePasswordInput, actionChangePwt
} from "./actions/actions";

export const dispatchs = (dispatch) =>
    (
        {
            dispatch:
                {

                    changeMenuCollapse: (v) => dispatch(actionChangeMenuCollapse(v)),
                    changeMenuItem: (v) => dispatch(actionChangeMenuItem(v)),
                    changeLogOut: () => dispatch(actionChangeLogOut()),

                    changeIsAuth: (v) => dispatch(actionChangeIsAuth(v)),
                    changeIsShowModal: (v) => dispatch(actionChangeIsShowModal(v)),
                    changeLoginInput: (v) => dispatch(actionChangeLoginInput(v)),
                    changePasswordInput: (v) => dispatch(actionChangePasswordInput(v)),
                    changePwt: (v) => dispatch(actionChangePwt(v)),

                }
        }
    )