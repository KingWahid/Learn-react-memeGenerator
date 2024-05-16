import React from 'react'
import memeData from './memeData'

export default function Meme() {
  // const [memeImg, setMemeImg] = React.useState("http:/i.imgflip.com/1bij.jpg")
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  const [allIMemeImages, setAllMemeImages] = React.useState(memeData)
    function getMemeImage(){
        const memeArr = allIMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArr.length);
        const url = memeArr[randomNumber].url
        setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url
        }))
        
    }
  return (
    <main>
    <div className="form">
        <input className="form--input" type="text" placeholder='Top text'/>
        <input className="form--input" type="text" placeholder='Bottom text'/>
        <button onClick={getMemeImage} className="form--btn">Get a new meme image</button>  
    </div>
    <img src={meme.randomImage} className="meme-img"/>
    </main>
  )
}
