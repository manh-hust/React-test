import { GET_CATE } from "../const"

const categories = [];


const handleCate =  (state = categories, action) => {

    
    switch(action.type) {
        case GET_CATE :

            return [...action.payload]

        default : 
            return state
    }   

}


export default handleCate