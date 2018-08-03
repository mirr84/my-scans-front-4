import {
    ACTION_MENU_COLLAPSE, ACTION_MENU_ITEM, ACTION_IS_AUTH, ACTION_IS_SHOW_MODAL, ACTION_CHANGE_LOGIN_INPUT,
    ACTION_CHANGE_PASSWORD_INPUT, ACTION_CHANGE_PWT, ACTION_LOGOUT, ACTION_CHANGE_JOURNAL_FILTER_COLLAPSE, ACTION_CHANGE_DATA_JOURNAL,
    ACTION_CHANGE_SELECT_ROW_JOURNAL, ACTION_CHANGE_JOURNAL_IMAGE, ACTION_CHANGE_ZOOM_IMAGE_JOURNAL, ACTION_CHANGE_JOURNAL_IMAGE_PROGRESS,
    ACTION_IS_SHOW_RE_PHOTOGRAPHED_MODAL, ACTION_CHANGE_REPHOTO_REASONS_LIST, ACTION_CHANGE_REASONS_ITEM, ACTION_CHANGE_CLEAN_REASONS_ITEM,
    ACTION_CHANGE_OTHER_REASONS, ACTION_CHANGE_STATUS_LIST, ACTION_CHANGE_SELECT_STATUS, ACTION_CHANGE_DATE_FROM_FILTER, ACTION_CHANGE_DATE_TO_FILTER,
    ACTION_CHANGE_IS_JOURNAL_PROGRESS, ACTION_CHANGE_IS_GET_TASK_BY_KEY_PROGRESS, ACTION_CHANGE_SET_ORDER_DATA, ACTION_IS_GET_ORDER_FROM_WORK,
    ACTION_IS_STOP_GET_ORDER_FROM_WORK_MODAL, ACTION_CHANGE_MOVED_FROM, ACTION_CHANGE_SCAN_MAIN_COLLAPSE, ACTION_CHANGE_SCAN_PAYMENT_INFORMATION_COLLAPSE,
    ACTION_CHANGE_SCAN_TOTAL_COLLAPSE, ACTION_CHANGE_SCAN_SENDER_COLLAPSE, ACTION_CHANGE_SCAN_RECEIVER_COLLAPSE, ACTION_CHANGE_SCAN_INFORMATION_ABOUT_CARGO_COLLAPSE,
    ACTION_CHANGE_SCAN_ORDER_NUMBER_INPUT, ACTION_CHANGE_SCAN_DATE_INPUT, ACTION_CHANGE_SCAN_ORDER_TYPE_INPUT, ACTION_CHANGE_SCAN_ORDER_MODE_DELIVERY_INPUT,
    ACTION_CHANGE_SCAN_ORDER_CITY_SENDER_INPUT, ACTION_CHANGE_SCAN_ORDER_CITY_RECEIVER_INPUT,
    ACTION_CHANGE_SCAN_ORDER_CONTRAGENT_SENDER_INPUT, ACTION_CHANGE_SCAN_ORDER_CONTRAGENT_RECEIVER_INPUT,
    ACTION_CHANGE_SCAN_ORDER_IS_OPEN_DROPDOWN_SENDER_FIO, ACTION_CHANGE_SCAN_ORDER_IS_OPEN_DROPDOWN_RECEIVER_FIO,
    ACTION_CHANGE_SCAN_ORDER_SENDER_FIO_INPUT, ACTION_CHANGE_SCAN_ORDER_RECEIVER_FIO_INPUT, ACTION_CHANGE_GET_PHONE_TYPES,
    ACTION_CHANGE_SET_PHONES, ACTION_CHANGE_SET_PASSPORT, ACTION_CHANGE_SET_PLACES, ACTION_CHANGE_JOURNAL_COURIER_CITY_INPUT,
    ACTION_CHANGE_JOURNAL_ORDER_NUMBER_INPUT, ACTION_CHANGE_JOURNAL_COURIER_INPUT, ACTION_CHANGE_JOURNAL_ONLY_UNGENT_INPUT, ACTION_IS_SET_TIMEOUT_WORK,
    ACTION_CHANGE_SCAN_ORDER_CONTRAGENT_OTHER_INPUT, ACTION_CHANGE_SCAN_ORDER_PAYER_PAY_TYPE, ACTION_CHANGE_SCAN_ORDER_PAYER_TYPE,
    ACTION_CHANGE_SCAN_ORDER_TARIFFS_DATA, ACTION_CHANGE_IS_PROGRESS_TARIFFS, ACTION_CHANGE_IS_PROGRESS_ADDITIONAL_SERVICE,
    ACTION_CHANGE_SCAN_ORDER_CALCULATION_AND_ADDITIONAL_SERVICE, ACTION_CHANGE_IS_PROGRESS_CURRENCY, ACTION_CHANGE_CURRENCY, ACTION_CHANGE_IS_PROGRESS_CALCULATION,
    ACTION_CHANGE_PARAMS_ADDITIONAL_SERVICES_INPUT

} from "./actionConst";

export const actionChangeMenuCollapse = (payload) => (
    {
        type: ACTION_MENU_COLLAPSE,
        payload
    }
)

export const actionChangeMenuItem = (payload) => (
    {
        type: ACTION_MENU_ITEM,
        payload
    }
)
export const actionChangeLogOut = () => (
    {
        type: ACTION_LOGOUT
    }
)

export const actionChangeIsAuth = (payload) => (
    {
        type: ACTION_IS_AUTH,
        payload
    }
)

export const actionChangeIsShowLoginModal = (payload) => (
    {
        type: ACTION_IS_SHOW_MODAL,
        payload
    }
)

export const actionChangeLoginInput = (payload) => (
    {
        type: ACTION_CHANGE_LOGIN_INPUT,
        payload
    }
)

export const actionChangePasswordInput = (payload) => (
    {
        type: ACTION_CHANGE_PASSWORD_INPUT,
        payload
    }
)

export const actionChangePwt = (payload) => (
    {
        type: ACTION_CHANGE_PWT,
        payload
    }
)

export const actionChangeJournalFilterCollapse = (payload) => (
    {
        type: ACTION_CHANGE_JOURNAL_FILTER_COLLAPSE,
        payload
    }
)

export const actionChangeDataJournal = (payload) => (
    {
        type: ACTION_CHANGE_DATA_JOURNAL,
        payload
    }
)

export const actionChangeSelectRowJournal = (payload) => (
    {
        type: ACTION_CHANGE_SELECT_ROW_JOURNAL,
        payload
    }
)

export const actionChangeJournalImage = (payload) => (
    {
        type: ACTION_CHANGE_JOURNAL_IMAGE,
        payload
    }
)

export const actionChangeZoomImageJournal = (payload) => (
    {
        type: ACTION_CHANGE_ZOOM_IMAGE_JOURNAL,
        payload
    }
)

export const actionChangeJournalImageProgress = (payload) => (
    {
        type: ACTION_CHANGE_JOURNAL_IMAGE_PROGRESS,
        payload
    }
)

export const actionChangeIsShowRePhotographedModal = (payload) => (
    {
        type: ACTION_IS_SHOW_RE_PHOTOGRAPHED_MODAL,
        payload
    }
)

export const actionChangeRephotoReasonsList = (payload) => (
    {
        type: ACTION_CHANGE_REPHOTO_REASONS_LIST,
        payload
    }
)

export const actionChangeReasonsItem = (payload) => (
    {
        type: ACTION_CHANGE_REASONS_ITEM,
        payload
    }
)

export const actionChangeCleanRephotoReasons = (payload) => (
    {
        type: ACTION_CHANGE_CLEAN_REASONS_ITEM
    }
)

export const actionChangeOtherReason = (payload) => (
    {
        type: ACTION_CHANGE_OTHER_REASONS,
        payload
    }
)

export const actionChangeGetStatusList = (payload) => (
    {
        type: ACTION_CHANGE_STATUS_LIST,
        payload
    }
)

export const actionChangeSelectStatus = (payload) => (
    {
        type: ACTION_CHANGE_SELECT_STATUS,
        payload
    }
)

export const actionChangeDateFromFilter = (payload) => (
    {
        type: ACTION_CHANGE_DATE_FROM_FILTER,
        payload
    }
)

export const actionChangeDateToFilter = (payload) => (
    {
        type: ACTION_CHANGE_DATE_TO_FILTER,
        payload
    }
)

export const actionChangeIsJournalProgress = (payload) => (
    {
        type: ACTION_CHANGE_IS_JOURNAL_PROGRESS,
        payload
    }
)

export const actionChangeIsGetTaskByKeyProgress = (payload) => (
    {
        type: ACTION_CHANGE_IS_GET_TASK_BY_KEY_PROGRESS,
        payload
    }
)

export const actionChangeSetOrderData = (payload) => (
    {
        type: ACTION_CHANGE_SET_ORDER_DATA,
        payload
    }
)

export const actionChangeIsGetOrderFromWork = (payload) => (
    {
        type: ACTION_IS_GET_ORDER_FROM_WORK,
        payload
    }
)

export const actionChangeSetTimeOut = (payload) => (
    {
        type: ACTION_IS_SET_TIMEOUT_WORK,
        payload
    }
)

export const actionChangeIsStopGetOrderFromWorkModal = (payload) => (
    {
        type: ACTION_IS_STOP_GET_ORDER_FROM_WORK_MODAL,
        payload
    }
)

export const actionChangeMovedFrom = (payload) => (
    {
        type: ACTION_CHANGE_MOVED_FROM,
        payload
    }
)

export const actionСhangeScanMainCollapse = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_MAIN_COLLAPSE,
        payload
    }
)

export const actionChangePaymentInformationCollapse = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_PAYMENT_INFORMATION_COLLAPSE,
        payload
    }
)

export const actionСhangeTotalCollapse = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_TOTAL_COLLAPSE,
        payload
    }
)

export const actionChangeSenderCollapse = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_SENDER_COLLAPSE,
        payload
    }
)

export const actionChangeReceiverCollapse = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_RECEIVER_COLLAPSE,
        payload
    }
)

export const actionChangeInformationAboutCargoCollapse = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_INFORMATION_ABOUT_CARGO_COLLAPSE,
        payload
    }
)

export const actionChangeScanOrderNumberInput = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_ORDER_NUMBER_INPUT,
        payload
    }
)

export const actionChangeScanDateInput = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_DATE_INPUT,
        payload
    }
)

export const actionChangeScanOrderTypeInput = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_ORDER_TYPE_INPUT,
        payload
    }
)

export const actionChangeScanOrderModeDeliveryInput = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_ORDER_MODE_DELIVERY_INPUT,
        payload
    }
)

export const actionChangeOrderCitySenderInput = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_ORDER_CITY_SENDER_INPUT,
        payload
    }
)

export const actionChangeOrderCityReceiverInput = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_ORDER_CITY_RECEIVER_INPUT,
        payload
    }
)

export const actionChangeOrderContragentSenderInput = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_ORDER_CONTRAGENT_SENDER_INPUT,
        payload
    }
)

export const actionChangeOrderContragentReceiverInput = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_ORDER_CONTRAGENT_RECEIVER_INPUT,
        payload
    }
)

export const actionChangeIsOpenDropdownSenderFio = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_ORDER_IS_OPEN_DROPDOWN_SENDER_FIO,
        payload
    }
)

export const actionChangeIsOpenDropdownReceiverFio = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_ORDER_IS_OPEN_DROPDOWN_RECEIVER_FIO,
        payload
    }
)

export const actionChangeSenderFioInput = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_ORDER_SENDER_FIO_INPUT,
        payload
    }
)

export const actionChangeReceiverFioInput = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_ORDER_RECEIVER_FIO_INPUT,
        payload
    }
)

export const actionChangeGetPhoneTypes = (payload) => (
    {
        type: ACTION_CHANGE_GET_PHONE_TYPES,
        payload
    }
)

export const actionChangeSetPhones = (payload) => (
    {
        type: ACTION_CHANGE_SET_PHONES,
        payload
    }
)

export const actionChangeSetPassport = (payload) => (
    {
        type: ACTION_CHANGE_SET_PASSPORT,
        payload
    }
)

export const actionChangeSetPlaces = (payload) => (
    {
        type: ACTION_CHANGE_SET_PLACES,
        payload
    }
)

export const actionChangeJournalCourierCityInput = (payload) => (
    {
        type: ACTION_CHANGE_JOURNAL_COURIER_CITY_INPUT,
        payload
    }
)

export const actionChangeJournalOrderNumberInput = (payload) => (
    {
        type: ACTION_CHANGE_JOURNAL_ORDER_NUMBER_INPUT,
        payload
    }
)

export const actionСhangeJournalCourierInput = (payload) => (
    {
        type: ACTION_CHANGE_JOURNAL_COURIER_INPUT,
        payload
    }
)

export const actionChangeJournalOnlyUrgentInput = (payload) => (
    {
        type: ACTION_CHANGE_JOURNAL_ONLY_UNGENT_INPUT,
        payload
    }
)

export const actionChangeOrderContragentOtherInput = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_ORDER_CONTRAGENT_OTHER_INPUT,
        payload
    }
)

export const actionChangePayerPayType = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_ORDER_PAYER_PAY_TYPE,
        payload
    }
)

export const actionChangePayerType = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_ORDER_PAYER_TYPE,
        payload
    }
)

export const actionChangeSetOrderTariffsData = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_ORDER_TARIFFS_DATA,
        payload
    }
)

export const actionChangeIsProgressTariffs = (payload) => (
    {
        type: ACTION_CHANGE_IS_PROGRESS_TARIFFS,
        payload
    }
)

export const actionChangeIsProgressAdditionalServices = (payload) => (
    {
        type: ACTION_CHANGE_IS_PROGRESS_ADDITIONAL_SERVICE,
        payload
    }
)

export const actionChangeIsProgressCalculation = (payload) => (
    {
        type: ACTION_CHANGE_IS_PROGRESS_CALCULATION,
        payload
    }
)

export const actionChangeSetOrderCalculationAndAdditionalServicesData = (payload) => (
    {
        type: ACTION_CHANGE_SCAN_ORDER_CALCULATION_AND_ADDITIONAL_SERVICE,
        payload
    }
)

export const actionChangeIsProgressCurrency = (payload) => (
    {
        type: ACTION_CHANGE_IS_PROGRESS_CURRENCY,
        payload
    }
)

export const actionChangeSetOrderCurrencyData = (payload) => (
    {
        type: ACTION_CHANGE_CURRENCY,
        payload
    }
)

export const actionChangeParamsAdditionalServicesInput = (payload) => (
    {
        type: ACTION_CHANGE_PARAMS_ADDITIONAL_SERVICES_INPUT,
        payload
    }
)
