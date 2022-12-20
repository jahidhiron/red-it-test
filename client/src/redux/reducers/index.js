import { connectRouter } from "connected-react-router";
import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import character from "./character";

// store configurations
const storeConfig = {
  key: "primary",
  storage: storage,
  blacklist: ["app"],
};

const reducer = (history) =>
  persistCombineReducers(storeConfig, {
    character,
    router: connectRouter(history),
  });

export default reducer;
