
import { useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomLocation from './utils/getRandomLocation'
import MainContent from './components/MainContent'

const  App = () => {
  const [imputValue, setImputValue] = useState(getRandomLocation())

  const url = `https://rickandmortyapi.com/api/location/${imputValue}`
  const [location, hasError]= useFetch(url)

  const inputLocation = useRef()
  
  const handleSumit = e => {
    e.preventDefault()
    // event.target.firstChild.value
    setImputValue(inputLocation.current.value)
  }


  return (
    <div className="app">
      <h1 className='app__title'></h1>
      <form className='app__form' onSubmit={handleSumit}>
        <input className='app__input' ref={inputLocation} type="text" />
        <button className='app__btn'>Search</button>
      </form>
          {
            hasError
            ? <h2 className='app__error'>❌Hey! you must provide an id from 1 to 126 😕</h2>
            : <MainContent location={location}/>
          }
    </div>
  )
}

export default App
