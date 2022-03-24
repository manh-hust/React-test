import {SET, ADD, DELETE} from './const'

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