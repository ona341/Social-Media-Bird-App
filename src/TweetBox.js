import React from 'react'
import "./TweetBox.css";
import {Avatar, Button} from "@mui/material"

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__input">

                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAlUkquwvDZ856VP_lj7B4tHF6lVQKrCZe4w&usqp=CAU"/>
                <input placeholder="What's happening?" type="text"/>
                {/* <input placeholder="What's happening?" type="text"/>
                <input placeholder="What's happening?" type="text"/> */}
            </div>
            <input className="tweetBox_IMG" placeholder="Enter URL?" type="text"/>

            <Button className='tweetBox__tweetButton'> Tweet</Button>
        </form>
        
        
        </div>
  )
}

export default TweetBox