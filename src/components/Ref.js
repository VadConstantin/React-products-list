import React, { useState, useEffect, useRef, useMemo, useCallback, useReducer } from 'react'



export const StateObject = () => {

  const initialState = { count: 0 }

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 }
      case "decrement":
        if (state.count <= 0) {
          return state
        }
        return { count: state.count - 1 }
      case "reinitialiser":
        return { count: 0 }
      default:
        throw new Error("i dont know this case")
    }
  }

  const [state, dispatch ] = useReducer(reducer, initialState)

  return(
    <div>
      <p>Nombre d'articles : {state.count} </p>
      <button onClick={() => dispatch({type:"increment"})}>Ajouter un article</button>
      <button onClick={() => dispatch({type: "decrement"})}> Retirer un article</button>
      <button onClick={() => dispatch({type: "reinitialiser"})}> Vider mon panier </button>

    </div>
  )
}
