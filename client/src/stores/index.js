import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import dataReducers from "./reducers/dataReducers";
import detailReducers from "./reducers/detailReducers";

const rootReducer = combineReducers({
  data: dataReducers,
  detail: detailReducers,
});

const middlewares = applyMiddleware(thunk);
let store = createStore(rootReducer, middlewares);

export default store;
