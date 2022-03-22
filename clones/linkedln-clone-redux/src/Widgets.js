import React from 'react'
import "./Widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ChatIcon from '@material-ui/icons/Chat';
import FaceIcon from '@material-ui/icons/Face';
import Chat from "./Chat.js";


function Widgets() {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 1,
                
            }}
        />
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h3>chat box</h3>
                <ChatIcon/> 
                 
            </div>
            <hr></hr>
           
           
            <div>
                <Chat Icon={FaceIcon} name="Ravi" message ="Hey there Im Ravi of ISE " time="8jun"/>
                <Chat Icon={FaceIcon} name="Mohammad Maaz" message ="Hey Ravi, whats your plan for this weekend " time="8jun"/>
                <Chat Icon={FaceIcon} name="Soumya" message ="Hey there I'm Secretary of ISSA ,NIE " time="8jun"/>
                <Chat Icon={FaceIcon} name="Arya AI" message ="Hey, Im placement coordinator of NIE ,ISE" time="8jun"/>
                <Chat Icon={FaceIcon} name="Bhaskar" message ="Hey there lorem epsum " time="8jun"/>
                <Chat Icon={FaceIcon} name="Nsaisoumya" message ="Hey there lorem epsum " time="8jun"/>
                <Chat Icon={FaceIcon} name="white Collar" message ="Hey there lorem epsum " time="8jun"/>
                 </div>
        </div>
    )
}

export default Widgets
