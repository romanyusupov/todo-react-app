import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { filterReducer } from "./redux/reducers/filter";
import { taskReducer } from "./redux/reducers/tasks";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import App from "./App";

import "./index.css";
import "./style.scss";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const rootReducer = combineReducers({
  filter: filterReducer,
  tasks: taskReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

export default store;
