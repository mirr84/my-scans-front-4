import {
    actionChangeMenuCollapse, actionChangeMenuItem, actionChangeLogOut,
    actionChangeIsAuth, actionChangeIsShowLoginModal, actionChangeLoginInput, actionChangePasswordInput, actionChangePwt,
    actionChangeJournalFilterCollapse, actionChangeDataJournal, actionChangeSelectRowJournal, actionChangeJournalImage,
    actionChangeZoomImageJournal, actionChangeJournalImageProgress, actionChangeIsShowRePhotographedModal, actionChangeRephotoReasonsList,
    actionChangeReasonsItem, actionChangeCleanRephotoReasons, actionChangeOtherReason, actionChangeGetStatusList,
    actionChangeSelectStatus, actionChangeDateFromFilter, actionChangeDateToFilter, actionChangeIsJournalProgress,
    actionChangeIsGetTaskByKeyProgress, actionChangeSetOrderData, actionChangeIsGetOrderFromWork, actionChangeIsStopGetOrderFromWorkModal,
    actionChangeMovedFrom
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
                    changeIsShowLoginModal: (v) => dispatch(actionChangeIsShowLoginModal(v)),
                    changeLoginInput: (v) => dispatch(actionChangeLoginInput(v)),
                    changePasswordInput: (v) => dispatch(actionChangePasswordInput(v)),
                    changePwt: (v) => dispatch(actionChangePwt(v)),

                    changeJournalFilterCollapse: (v) => dispatch(actionChangeJournalFilterCollapse(v)),
                    changeDataJournal: (v) => dispatch(actionChangeDataJournal(v)),
                    changeSelectRowJournal: (v) => dispatch(actionChangeSelectRowJournal(v)),
                    changeJournalImage: (v) => dispatch(actionChangeJournalImage(v)),
                    changeZoomImageJournal: (v) => dispatch(actionChangeZoomImageJournal(v)),
                    changeJournalImageProgress: (v) => dispatch(actionChangeJournalImageProgress(v)),
                    changeIsShowRePhotographedModal: (v) => dispatch(actionChangeIsShowRePhotographedModal(v)),
                    changeRephotoReasonsList: (v) => dispatch(actionChangeRephotoReasonsList(v)),
                    changeReasonsItem: (v) => dispatch(actionChangeReasonsItem(v)),
                    changeCleanRephotoReasons: () => dispatch(actionChangeCleanRephotoReasons()),
                    changeOtherReason: (v) => dispatch(actionChangeOtherReason(v)),
                    changeGetStatusList: (v) => dispatch(actionChangeGetStatusList(v)),
                    changeSelectStatus: (v) => dispatch(actionChangeSelectStatus(v)),
                    changeDateFromFilter: (v) => dispatch(actionChangeDateFromFilter(v)),
                    changeDateToFilter: (v) => dispatch(actionChangeDateToFilter(v)),
                    changeIsJournalProgress: (v) => dispatch(actionChangeIsJournalProgress(v)),

                    changeIsGetTaskByKeyProgress: (v) => dispatch(actionChangeIsGetTaskByKeyProgress(v)),
                    changeSetOrderData: (v) => dispatch(actionChangeSetOrderData(v)),
                    changeIsGetOrderFromWork: (v) => dispatch(actionChangeIsGetOrderFromWork(v)),
                    changeIsStopGetOrderFromWorkModal: (v) => dispatch(actionChangeIsStopGetOrderFromWorkModal(v)),
                    changeMovedFrom: (v) => dispatch(actionChangeMovedFrom(v)),

                }
        }
    )