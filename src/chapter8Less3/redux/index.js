import { createStore, combineReducers } from "redux";
import {filterReducer} from "./reducers/filter";
import {taskReducer} from "./reducers/tasks";


const rootReducer = combineReducers({
  filter: filterReducer, 
  tasks: taskReducer,
})
const store = createStore(rootReducer);

export default store;
