import { useState, useEffect, useCallback, useReducer, useRef } from "react";
import reducer, { initState }  from './reducer'
import {setJob, deleteJob, addJob} from './actions'

function TodoApp() {
  
  const [state, dispath] = useReducer(reducer, initState)
  const {job, jobs} = state

  const inputRef = useRef()

  const handleSubmit = () => {
    dispath(addJob(job))
    dispath(setJob(''))

    inputRef.current.focus()
  }

  const handleDelete = (index) => {
    dispath(deleteJob(index))
  }

  return (
      <div style={{padding: 20}}>
        <h3>Todo</h3>
        <input
          ref={inputRef}
          value={job}
          placeholder="Enter todo..."
          onChange={e => {
            dispath(setJob(e.target.value))
          }}
        />
        <button onClick={handleSubmit}>Add</button>
        <ul>
          {jobs.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleDelete(index)}> X</button>
            </li>
          ))}
        </ul>
      </div>
  );
}


export default TodoApp;
