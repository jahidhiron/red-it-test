import { createAction } from "redux-actions";

// char list
export const CHAR_LIST = "CHAR_LIST";
export const charList = createAction(CHAR_LIST);

export const CHAR_LIST_SUCCESS = "CHAR_LIST_SUCCESS";
export const charListSuccess = createAction(CHAR_LIST_SUCCESS);

export const CHAR_LIST_FAILURE = "CHAR_LIST_FAILURE";
export const charListFailure = createAction(CHAR_LIST_FAILURE);

export const CHAR_LIST_REQUESTED = "CHAR_LIST_REQUESTED";
export const charListRequested = createAction(CHAR_LIST_REQUESTED);

// char detail
export const CHAR_DETAIL = "CHAR_DETAIL";
export const charDetail = createAction(CHAR_DETAIL);

export const CHAR_DETAIL_SUCCESS = "CHAR_DETAIL_SUCCESS";
export const charDetailSuccess = createAction(CHAR_DETAIL_SUCCESS);

export const CHAR_DETAIL_FAILURE = "CHAR_DETAIL_FAILURE";
export const charDetailFailure = createAction(CHAR_DETAIL_FAILURE);

export const CHAR_DETAIL_REQUESTED = "CHAR_DETAIL_REQUESTED";
export const charDetailRequested = createAction(CHAR_DETAIL_REQUESTED);
