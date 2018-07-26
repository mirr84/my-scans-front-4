import {
    ACTION_LOGOUT, ACTION_CHANGE_JOURNAL_FILTER_COLLAPSE, ACTION_CHANGE_DATA_JOURNAL,
    ACTION_CHANGE_SELECT_ROW_JOURNAL, ACTION_CHANGE_JOURNAL_IMAGE, ACTION_CHANGE_ZOOM_IMAGE_JOURNAL,
    ACTION_CHANGE_JOURNAL_IMAGE_PROGRESS
} from "../actions/actionConst";
import {getLocalStorage} from "../utils/getLocalStorage";

const initState = {
    collapse: true,
    data: {
        items: []
    },
    selectRowCode: null,
    imageData: null,
    imageZoom: false,
    imageProgress: false
}

export const journalReducer = (state = getLocalStorage('journalReducer', initState), action) => {

    let newState = Object.assign({}, state);

    if (action.type === ACTION_LOGOUT) {
        newState = initState;
    }

    if (action.type === ACTION_CHANGE_JOURNAL_FILTER_COLLAPSE) {
        newState.collapse = action.payload;
    }

    if (action.type === ACTION_CHANGE_DATA_JOURNAL) {
        newState.data = action.payload;
    }

    if (action.type === ACTION_CHANGE_SELECT_ROW_JOURNAL) {
        newState.selectRowCode = action.payload;
    }

    if (action.type === ACTION_CHANGE_JOURNAL_IMAGE) {
        newState.imageData = action.payload;
    }

    if (action.type === ACTION_CHANGE_ZOOM_IMAGE_JOURNAL) {
        newState.imageZoom = action.payload;
    }

    if (action.type === ACTION_CHANGE_JOURNAL_IMAGE_PROGRESS) {
        newState.imageProgress = action.payload;
    }

    return newState;

}