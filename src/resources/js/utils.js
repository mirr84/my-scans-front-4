import {toast} from "react-toastify";

export const messages = (data) => {

    if (!data) return null;
    if (!data.alerts) return null;
    if (!Array.isArray(data.alerts)) return null;

    data.alerts.forEach(
        item => {
            toast.warn(item.msg);
        }
    )

}