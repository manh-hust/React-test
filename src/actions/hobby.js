
export const addNewHobby = (hobby) => {
    return {
        type: "ADD_HOBBY",
        payload: hobby
    }
}

export const selectedHobby = (hobby) => {
    return {
        type: "SELECT_ITEM",
        payload: hobby
    }
}