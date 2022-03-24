import {SET, ADD, DELETE} from '../store/const'

export const setJob = (payload) => {
    return {
      type: SET,
      payload
    }
  }
  
export const addJob = (payload) => {
    return {
      type: ADD,
      payload
    }
  }
  
export const deleteJob = (payload) => {
    return {
      type: DELETE,
      payload
    }
  }