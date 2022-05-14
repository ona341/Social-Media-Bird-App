import React from 'react'
import "./TweetBox.css";
import {Avatar, Button} from "@mui/material"
import {useState} from "react"
import db from "./firebase";


function TweetBox() {
  const [tweetMessage, setTweetmessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("Posts").add({
      displayName: "Maria :)",
            username: "ILL",
            verified: true,
            text: tweetMessage,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAlUkquwvDZ856VP_lj7B4tHF6lVQKrCZe4w&usqp=CAU",
            image: tweetImage

    })
  setTweetmessage("");
  setTweetImage("");
  }


  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__input">

                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAlUkquwvDZ856VP_lj7B4tHF6lVQKrCZe4w&usqp=CAU"/>
                <input 
                onChange={e =>setTweetmessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text"/>
                {/* <input placeholder="What's happening?" type="text"/>
                <input placeholder="What's happening?" type="text"/> */}
            </div>
            <input value={tweetImage} 
            onChange={e=> setTweetImage(e.target.value)} className="tweetBox_IMG" placeholder="Enter URL?" type="text"/>

            <Button onClick={sendTweet}type="Submit" className='tweetBox__tweetButton'> Tweet</Button>
        </form>
        
        
        </div>
  )
}

export default TweetBox