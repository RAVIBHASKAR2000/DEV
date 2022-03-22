import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useDispatch} from "react-redux";
import {logout } from "./features/userSlice";
import { auth } from './firebase';
import Profile from "./profile"

import {
    BrowserRouter ,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

function Header() {
    
    const dispatch = useDispatch();
     
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }

    const profilePage = () => {
        <Profile/>
    }
    return (
        <div className="header">
           
        <div className="header_left">
           <img src="./images/linkedln.png" alt=""/>
           <div className="header_search">
             <SearchIcon />

             <input type="text"  placeholder="Search"/>

            </div>
        </div>
        <div className="header_right">
            <Link to="/home"><HeaderOptions Icon={HomeIcon}  title="Home"/></Link>
            <HeaderOptions Icon={SupervisorAccountIcon}  title="My Network"/>
       
            <HeaderOptions Icon={ChatIcon} title="Messaging" />
            <HeaderOptions Icon={NotificationsIcon} title="Notification" />
            <Link to="/profile"> <HeaderOptions Icon={AccountCircleIcon} title="Profile" /></Link>
            <HeaderOptions Icon={ExitToAppIcon} title="Logout" onClick={logoutOfApp} />                
        </div>
        </div>
    )
}

export default Header
