import React from 'react'
import Header from './component/Header'
import Meme from './component/Meme'

function App() {

const [isGoingOut, setGoingOut] = React.useState(true)
  return (
    <>
        <Header />
        <Meme />
    </>
  )
}

export default App
