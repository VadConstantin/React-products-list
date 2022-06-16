import React, { useState, useMemo} from 'react'
import { encode } from 'tar/lib/winchars'

const Button = React.memo(function () {
  console.log("bouton")
  return <button>hello</button>
})

export const List = () => {

  const [ number, setNumber ] = useState(0)
  const [ value, setValue ] = useState(0)

  const handleClick = () => {
    setValue(n => n + 1)
  }

  const logConsole = useMemo(() => {
    console.log("hello");
    return number + 2
  }, [number])

  return(
    <div>
      <Button />
      <button onClick={handleClick}> {value} </button>
    </div>
  )
}
