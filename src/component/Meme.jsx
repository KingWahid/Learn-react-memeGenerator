import React from 'react'
import memeData from './memeData'

export default function Meme() {
  // const [memeImg, setMemeImg] = React.useState("http:/i.imgflip.com/1bij.jpg")
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
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
  function handleChange(event) {
    setMeme(prevText => ({
      ...prevText,
      [event.target.name]: event.target.value
    }))
  }
  return (
    <main>
    <div className="form">
        <input 
            className="form--input" 
            type="text" 
            placeholder='Top text'
            name="topText"
            value={meme.topText}
            onChange={handleChange}
        />
        <input 
            className="form--input" 
            type="text" 
            placeholder='Bottom text'
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
        />
        <button onClick={getMemeImage} className="form--btn">Get a new meme image</button>  
    </div>
    <div className="meme">
          <img src={meme.randomImage} className="meme-img"/>
          <h2 className="meme-text top">{meme.topText}</h2>
          <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>

    
    </main>
  )
}
