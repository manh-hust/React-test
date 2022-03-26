const initState = {
    list: [],
    itemSelected: null
}


const hobbyReducer = (state = initState, action) => {
    switch(action.type){
        case "ADD_HOBBY" :

            return{
                ...state,
                list: [...state.list, action.payload]
            }
        case "SELECT_ITEM" :

            return {
                ...state,
                itemSelected: action.payload
            }

        default :

        return state
    }
}

export default hobbyReducer