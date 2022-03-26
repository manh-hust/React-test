import {SET, ADD, DELETE} from '../store/const'

export const initState = {
    job: '',
    jobs: []
  }
  
const reducer = (state, action) => {
    switch(action.type) {
      case SET :
        return {
          ...state,
          job: action.payload
        }
      case ADD :
        return {
          ...state,
          jobs: [...state.jobs, action.payload]
        }
  
      case DELETE :
        const newJobs = [...state.jobs]
        newJobs.splice(action.payload, 1)
        return {
          ...state,
          jobs: [...newJobs]
        }
  
      default :
        throw new  Error('Invalid')
    }
  }

export default reducer
  