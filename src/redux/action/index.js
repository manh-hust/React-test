import { ADD_ITEM, DEL_ITEM } from "../const"

export const addCart = (product) => {

    return {
        type: "ADD_ITEM",
        payload: product,
    }
}

export const delCart = (product) => {

    return {
        type: 'DELETE_ITEM',
        payload: product
    }
}