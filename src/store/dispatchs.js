import {
    actionChangeMenuCollapse, actionChangeMenuItem, actionChangeLogOut,
    actionChangeIsAuth, actionChangeIsShowLoginModal, actionChangeLoginInput, actionChangePasswordInput, actionChangePwt,
    actionChangeJournalFilterCollapse, actionChangeDataJournal, actionChangeSelectRowJournal, actionChangeJournalImage,
    actionChangeZoomImageJournal, actionChangeJournalImageProgress, actionChangeIsShowRePhotographedModal, actionChangeRephotoReasonsList,
    actionChangeReasonsItem, actionChangeCleanRephotoReasons, actionChangeOtherReason, actionChangeGetStatusList,
    actionChangeSelectStatus, actionChangeDateFromFilter, actionChangeDateToFilter, actionChangeIsJournalProgress,
    actionChangeIsGetTaskByKeyProgress, actionChangeSetOrderData, actionChangeIsGetOrderFromWork, actionChangeIsStopGetOrderFromWorkModal,
    actionChangeMovedFrom, actionСhangeScanMainCollapse, actionChangePaymentInformationCollapse, actionСhangeTotalCollapse,
    actionChangeSenderCollapse, actionChangeReceiverCollapse, actionChangeInformationAboutCargoCollapse, actionChangeScanOrderNumberInput,
    actionChangeScanDateInput, actionChangeScanOrderTypeInput, actionChangeScanOrderModeDeliveryInput, actionChangeOrderCitySenderInput,
    actionChangeOrderCityReceiverInput, actionChangeOrderContragentSenderInput, actionChangeOrderContragentReceiverInput,
    actionChangeIsOpenDropdownSenderFio, actionChangeIsOpenDropdownReceiverFio, actionChangeSenderFioInput, actionChangeReceiverFioInput,
    actionChangeGetPhoneTypes, actionChangeSetPhones, actionChangeSetPassport

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
                    changeScanMainCollapse: (v) => dispatch(actionСhangeScanMainCollapse(v)),
                    changePaymentInformationCollapse: (v) => dispatch(actionChangePaymentInformationCollapse(v)),
                    changeTotalCollapse: (v) => dispatch(actionСhangeTotalCollapse(v)),
                    changeSenderCollapse: (v) => dispatch(actionChangeSenderCollapse(v)),
                    changeReceiverCollapse: (v) => dispatch(actionChangeReceiverCollapse(v)),
                    changeInformationAboutCargoCollapse: (v) => dispatch(actionChangeInformationAboutCargoCollapse(v)),
                    changeScanOrderNumberInput: (v) => dispatch(actionChangeScanOrderNumberInput(v)),
                    changeScanDateInput: (v) => dispatch(actionChangeScanDateInput(v)),
                    changeScanOrderTypeInput: (v) => dispatch(actionChangeScanOrderTypeInput(v)),
                    changeScanOrderModeDeliveryInput: (v) => dispatch(actionChangeScanOrderModeDeliveryInput(v)),
                    changeOrderCitySenderInput: (v) => dispatch(actionChangeOrderCitySenderInput(v)),
                    changeOrderCityReceiverInput: (v) => dispatch(actionChangeOrderCityReceiverInput(v)),
                    changeOrderContragentSenderInput: (v) => dispatch(actionChangeOrderContragentSenderInput(v)),
                    changeOrderContragentReceiverInput: (v) => dispatch(actionChangeOrderContragentReceiverInput(v)),
                    changeIsOpenDropdownSenderFio: (v) => dispatch(actionChangeIsOpenDropdownSenderFio(v)),
                    changeIsOpenDropdownReceiverFio: (v) => dispatch(actionChangeIsOpenDropdownReceiverFio(v)),
                    changeSenderFioInput: (v) => dispatch(actionChangeSenderFioInput(v)),
                    changeReceiverFioInput: (v) => dispatch(actionChangeReceiverFioInput(v)),
                    changeGetPhoneTypes: (v) => dispatch(actionChangeGetPhoneTypes(v)),
                    changeSetPhones: (v) => dispatch(actionChangeSetPhones(v)),
                    changeSetPassport: (v) => dispatch(actionChangeSetPassport(v)),


                }
        }
    )