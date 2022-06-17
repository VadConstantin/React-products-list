import React, { useReducer, useState, useCallback } from 'react'

// useReducer

export const StateObject = () => {

   const initialValue = {count: 0}

  const reducer = (state, action) => {
    switch(action.type) {
      case "increment":
        return {count: state.count + 1}
      case "decrement":
        return {count: state.count - 1}
      default:
        throw new Error("i dont know this action")
    }
  }

  const [value, dispatch] = useReducer(reducer, initialValue)

  return(
    <div>
      <p>Compteur : {value.count}</p>
      <button onClick={() => dispatch({type: "increment"})}>Incrementer</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrementer</button>

    </div>
  )
}

// useState

export const Example = () => {

  const [ value, setValue ] = useState({count: 0})

  const handleClickIncrement = useCallback(() => {
    console.log("increment")
    setValue((prev) => {
      return {count: prev.count + 1}})
  }, [])

  const handleClickDecrement = useCallback(() => {
    console.log("decrement")
    setValue({count: value.count - 1})
  }, )

  return(
    <div>
      <br></br>
      <p>Compteur 2 : {value.count} </p>
      <button onClick={handleClickIncrement}>Incrementer </button>
      <button onClick={handleClickDecrement}>Décrémenter </button>
    </div>
  )
}
