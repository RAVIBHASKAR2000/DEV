import React from 'react'
import "./profile.css";
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';

function Profile() {
    const user =useSelector(selectUser);

    return (
        
            <div>
                <div className="profilemain">
                     <div className="avatarfront"> 
                        
                        <img style={{borderRadius:"50%", margin:"2%"}} src="./images/swiggy.jpeg " height="200" width="200"></img>
                        
                          <div className="avatarname">
                            <h3>{user.displayName}</h3>
                            <h4>{user.email}</h4>
                                    <div style={{marginTop:"10px"}}>
                                        <Button variant="contained" color="primary" >
                                                Follow
                                        </Button>
            
                                        <Button  style={{marginLeft:"20px"}} variant="contained" color="secondary">
                                            message  <SendIcon style={{marginLeft:"4px"}}/>
                                        </Button>
                                    </div>

                                    
                            
                        </div>
                        <div style={{marginTop:"10px", textAlign:"start", marginLeft:"60px"}}>
                                    
                                        <h3>Likes</h3> 
                                        <p>#Sports</p>
                                        <p>#max</p>
                                        <p>#Finance News</p>
                                        <p>#victoria models</p>
                                        
                        </div>
                 </div>

                <div className="profilemiddle">
                    <img src="./images/swiggy homepage.jpeg" width="100%" height="200px" style={{borderRadius:"10px"}}  ></img>
                        
                        <div className="middle">   
                                <div>
                                    <div>
                                        <h2 style={{margin:"10px"}}>Events </h2>
                                        <div className="eventbox">
                                            <div className="box"><img src="./images/1.jpeg" width="100" height="100"></img></div>
                                            <div className="box"><img src="./images/2.jpeg" width="100" height="100"></img></div>
                                            <div className="box"> <img src="./images/3.jpg" width="100" height="100"></img></div>
                                            <div className="box" style={{textAlign:"center",backgroundColor:"#d1c9c9"}}> <AddIcon style={{marginTop:"40%", }}/></div>
                                        </div>
                                    </div>
                                    <h2 style={{margin:"10px"}}>Description</h2>
                                    <div style={{backgroundColor:"#c9c9c9", width:"500px", height:"200px",borderRadius:"10px", boxShadow: "0.5rem 1rem 2rem rgba(0, 0, 0, 0.897)"}}>
                                            <p style={{padding:"30px"}}>
                                             Swiggy is India's largest online food ordering and delivery platform, founded in 2014. Swiggy is based in Bangalore, India, and as of March 2019, was operating in 100 Indian cities. It is one of 2 biggest online food delivery company the other one being it's arch rival zomato In early 2019, Swiggy expanded into general product deliveries under the name Swiggy Stores.
                                            </p>
                                    </div>
                                </div>
                                
                                   
                               
                          
                                <div style={{ height: '80vh', width: '100%' }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7374317302856!2d77.61836861382838!3d12.924590090886735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae145815555555%3A0x79c113e1312d5f08!2sSwiggy!5e0!3m2!1sen!2sin!4v1628585050738!5m2!1sen!2sin"  width="100%" height="100%" frameborder="0" css={{border:0}} aria-hidden="false" tabIndex="0"></iframe>
                                </div>
                        </div> 
                        
                      
                </div>



             </div>

             
        </div>
    )
}

export default Profile
