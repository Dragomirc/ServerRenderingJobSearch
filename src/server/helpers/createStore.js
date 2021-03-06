import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../../client/ducks/combinedReducer";

export default req => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  return store;
};
