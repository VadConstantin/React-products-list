import React, { useState, useEffect, useMemo } from 'react'
import { encode } from 'tar/lib/winchars'

const useIncrement = (init, step) => {
  const [count, setCount] = useState(init)
  const increment = () => {
    setCount(c => c + step)
  }
  return [count, increment]
}

const Button = () => {

  const [count, increment] = useIncrement(0, 3)

  const handleClick = () => {
    increment()
  }

  return (
    <button onClick={handleClick}>Incrementer: {count}</button>
  )
}

const useToggleCompteur = () => {
  const [value, setValue ] = useState(true)
  const toggle = () => {
    setValue(v => !v)
  }
  return [ value, toggle]
}

const PostTable = () => {
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setPosts(data)
    })
  }, [])

  const logged = useMemo(() => {
    return console.log(posts[0])
  }, [posts])

  return(
    <div>
      <p>{logged}</p>
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Name</th>
            <th>Contenu</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(p => <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.email}</td>
            <td>{p.body}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}


export const App = () => {

  const [ compteurVisible, toggleCompteur ] = useToggleCompteur()

  return(
    <React.Fragment>
      Afficher le compteur
      <input type="checkbox" checked={compteurVisible} onChange={toggleCompteur}/>
      <br></br>
      {compteurVisible && <Button />}
      <PostTable />
    </React.Fragment>
  )

}
