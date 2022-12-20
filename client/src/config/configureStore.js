import { routerMiddleware } from "connected-react-router";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import reducer from "../redux/reducers";
import rootSaga from "../redux/sagas";

// configured store under a development mode
export default function configureStore(history) {
  const sagaMiddleware = createSagaMiddleware();
  const middle =
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(
          applyMiddleware(routerMiddleware(history), sagaMiddleware)
        )
      : compose(applyMiddleware(routerMiddleware(history), sagaMiddleware));
  const store = createStore(reducer(history), middle);
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);

  return { persistor, store };
}
