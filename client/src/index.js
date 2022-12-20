import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { createBrowserHistory as createHistory } from "history";
import { PersistGate } from "redux-persist/es/integration/react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import configureStore from "./config/configureStore";
import Navigation from "./navigation";

export const history = createHistory();
const { persistor, store } = configureStore(history);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter history={history}>
            <Navigation />
          </BrowserRouter>
          <ToastContainer autoClose={2000} />
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
