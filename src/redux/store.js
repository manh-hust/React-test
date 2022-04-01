import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./reducers";
import thunk from "redux-thunk"

const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducers,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
    );

export default store