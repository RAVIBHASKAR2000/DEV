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
                        
                        <img style={{borderRadius:"50%", margin:"2%"}} src="./images/images.jpg " height="200" width="200"></img>
                        
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
                    <img src="./images/cisco.jpeg" width="100%" height="200px" style={{borderRadius:"10px"}}  ></img>
                        
                        <div className="middle">   
                                <div>
                                    <div>
                                        <h2 style={{margin:"10px"}}>Events </h2>
                                        <div className="eventbox">
                                            <div className="box"><img src="./images/cisco1.jpeg" width="100" height="100"></img></div>
                                            <div className="box"><img src="./images/cisco2.jpeg" width="100" height="100"></img></div>
                                            <div className="box"> <img src="./images/cisco3.jpeg" width="100" height="100"></img></div>
                                            <div className="box" style={{textAlign:"center",backgroundColor:"#d1c9c9"}}> <AddIcon style={{marginTop:"40%", }}/></div>
                                        </div>
                                    </div>
                                    <h2 style={{margin:"10px"}}>Description</h2>
                                    <div style={{backgroundColor:"#c9c9c9", width:"500px", height:"200px",borderRadius:"10px", boxShadow: "0.5rem 1rem 2rem rgba(0, 0, 0, 0.897)"}}>
                                            <p style={{padding:"30px"}}>
                                            Cisco India commenced operations in 1995. India, as a region, is part of the APAC theater and Bangalore is the 2nd Corporate Headquarter for Cisco. Cisco has 7 Offices in Gurgaon, Mumbai, Bangalore, Chennai, Pune, Kolkata and Hyderabad. India headcount is nearly 11,000. The Cisco Global Development Center is in Bangalore, this is the largest outside of the US.
                                            </p>
                                    </div>
                                </div>
                                
                                   
                               
                          
                                <div style={{ height: '80vh', width: '100%' }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5634784280874!2d77.69389061413483!3d12.935753919165487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae139ba38d22a3%3A0xb9a28718c7cff346!2sCisco!5e0!3m2!1sen!2sin!4v1625052551361!5m2!1sen!2sin"  width="100%" height="100%" frameborder="0" css={{border:0}} aria-hidden="false" tabIndex="0"></iframe>
                                </div>
                        </div> 
                        
                      
                </div>



             </div>

             
        </div>
    )
}

export default Profile
