import React, { useReducer, useState, useCallback } from 'react'

// useReducer

export const StateObject = () => {

  const initialState = {count: 2}

  const reducer = (state, action ) => {
    switch(action.type) {
      case 'increment':
        return {count: state.count + 1}
      case 'decrement':
        if (state.count <= 0) {
          return state
        }
        return {count: state.count - 1}
      default:
        throw new Error("I dont know this command")
    }
  }

  const [object, dispatch] = useReducer(reducer, initialState)

  return(
    <div>
      <p>Compteur : {object.count}</p>
      <button onClick={() => dispatch({type: "increment"})}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

    </div>
  )
}

// useState

export const Example = () => {

  const [ value, setValue ] = useState({count: 0})

  const handleClickIncrement = () => {
    setValue((prev) => {
      return {count: prev.count + 1}})
  }

  const handleClickDecrement = () => {
    if (value.count <= 0) {
      setValue({count: 0})
    } else
    setValue({count: value.count - 1})
  }

  return(
    <div>
      <br></br>
      <p>Compteur : {value.count} </p>
      <button onClick={handleClickIncrement}>Incrementer </button>
      <button onClick={handleClickDecrement}>Décrémenter </button>
    </div>
  )
}
