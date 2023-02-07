import { createStore, combineReducers } from "redux";
import { filterReducer } from "./reducers/filter";
import { taskReducer } from "./reducers/tasks";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  filter: filterReducer,
  tasks: taskReducer,
});

const log = (store) => (next) => (action) => {
  

  if (action.type === "ADD_TASK") {
    fetch("https://63a5914c318b23efa79755f9.mockapi.io/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    });
  }
  next(action);
};

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, log)));

export default store;
