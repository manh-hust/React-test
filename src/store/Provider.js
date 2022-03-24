import Context from "./Context";
import { useReducer } from 'react'
import reducer, {initState} from "./Reducer";
import logger from "./logger";

function Provider({children}){


    const [state, dispath] = useReducer(logger(reducer), initState)

    return(
        <Context.Provider value={[state, dispath]}>
            {children}
        </Context.Provider>
    )
}

export default Provider