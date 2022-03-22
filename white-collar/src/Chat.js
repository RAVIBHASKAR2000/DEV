import React from 'react';
import "./Chat.css"

function Chat({Icon ,name, message,time}) {
    return (
        <div className="chatbox">
            <div className="chatbox__upper">
            
                <Icon  style ={{color : "black"}}  fontSize="large"  />
                <h4  style={{ margin:"5px"}}>{name}</h4>
                <h4 style={{textAlign:"center", margin:"5px", marginLeft:"100px" }}>{time}</h4>
            </div>    
            <div>
            <h5 style={{marginLeft:"20%" , marginTop:"-10px", opacity:"0.6", maxHeight:"20px"}}>{message}</h5>
            </div>
           

        </div>
    )
}

export default Chat;
