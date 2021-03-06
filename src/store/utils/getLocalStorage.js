// import {toast} from "react-toastify";

export const getLocalStorage = (reducerName, initState) => {

    let tmp = localStorage.getItem('store');

    try {
        tmp = JSON.parse(tmp);
        tmp = tmp[reducerName];
    } catch (e) {
        tmp = null;
        // toast.warn('Нарушение состояния хранилища данных, состояние сброшено на первоночальное');
    }

    if (!tmp) tmp = initState;

    return tmp;
}