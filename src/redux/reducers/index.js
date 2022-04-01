import handleCart from "./handleCart";
import handleCate from "./categories";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    handleCart,
    handleCate
})

export default rootReducers