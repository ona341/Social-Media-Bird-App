import React from 'react'
import './Post.css'
import { Avatar } from "@mui/material"
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({displayName,userName,verified,text,image,avatar}) {
  return (
    <div className="post">
        <div className='post_avatar'>
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvV2vwQK6xT8xCLJg8Nl3N86vPyPeTYTnuA&usqp=CAU" alt=""/>
        
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>
                        Maria Aghaizu{" "}
                        <span className="post__headerSpecial">
                        <VerifiedRoundedIcon className="post__badge"/>
                        </span>
                    </h3>
                </div>
                <div className='post__headerDescription'> 
                <p>Build a Twitter Clone then?</p>
                </div>

            </div>
            <img src='https://media.tenor.com/klm-5yzv87IAAAAM/you-can-do-that-if-you-want-benedict-townsend.gif' alt =""/>
            <div className='post__footer'>
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />


            </div>
        </div>
        
        </div>
  )
}

export default Post