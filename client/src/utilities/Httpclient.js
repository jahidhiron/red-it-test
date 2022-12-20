import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { push } from "connected-react-router";
import axiosInstance from "./axios-instance";
// import { logout } from "../redux/actions/user-action-types";
import { hideLoader, showLoader } from "../redux/actions/app-action-types";

function* httpClient(payload, loader = true) {
  const data = {
    ...payload,
    headers: {
      ...payload.headers,
    },
  };

  try {
    if (loader) {
      yield put(showLoader());
      const { data: result, error } = yield call(axiosInstance, data);
      yield put(hideLoader());
      return {
        error,
        result,
      };
    } else {
      const { data: result, error } = yield call(axiosInstance, data);
      return {
        error,
        result,
      };
    }
  } catch (error) {
    if (loader) {
      yield put(hideLoader());
    }
    let myError = error?.response?.status ? error.response.data : error;
    if (error?.response?.status === 401) {
      yield put(push("/login"));
    }
    if (myError?.status) {
      if (myError.status === 401) {
        yield put(push({ pathname: "/" }));
        toast.error("Session Expired. Please login again.");
      } else {
        // toast.error(myError.message);
      }
    }
    return {
      error: myError?.message,
      result: null,
    };
  }
}

export default httpClient;
