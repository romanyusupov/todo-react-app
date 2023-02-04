import { createStore, combineReducers, } from "redux";
import {filterReducer} from "./reducers/filter";
import {taskReducer} from "./reducers/tasks";
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  filter: filterReducer, 
  tasks: taskReducer,
})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
