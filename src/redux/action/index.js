import axios from 'axios'
import { ADD_ITEM, DEL_ITEM, GET_CATE } from "../const"

export const addCart = (product) => {

    return {
        type: ADD_ITEM,
        payload: product,
    }
}

export const delCart = (product) => {

    return {
        type: DEL_ITEM,
        payload: product
    }
}

export const getCate = () => async dispatch => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products/categories")
        dispatch({
            type: GET_CATE,
            payload: response.data
        })
    } catch (error) {
        console.log("Error: ", error);
    }
}