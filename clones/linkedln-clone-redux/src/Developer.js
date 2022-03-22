import React from 'react';
import "./developer.css";
function Developer() {
    return (
        <div>
        <h1 style={{textAlign:"center"}}>Our developers</h1>
       <div className="developer__main">
            
            <div className="card">
                <img src="/images/ravi.jpeg" width="280px" height="350px"></img>
                <h2 className="card__name">Ravi Bhaskar</h2>
                <h4 style={{textAlign:"center"}}>The National Institute of Engineering , 6th semester ISE</h4>
                
                <div className="social">
                        <div className="icon">
                        <a href={"https://www.linkedin.com/in/ravi-bhaskar-053814190/"}><img src="/images/linkedlnicon.png" width="50" height="50"></img></a>
                        </div>
                        <div className="icon" style={{marginTop:"-10px"}}>
                        <a href={"https://github.com/RAVIBHASKAR2000"}><img src="/images/github1.png" width="70" height="70" ></img></a>
                        </div>
                        <div  className="icon">
                        <a href={"https://www.instagram.com/ravibhaskar2000/"}><img src="/images/instagram.png" width="50" height="50"></img></a>
                        </div> 
                </div>


            </div>
            <div className="card">
                <img src="/images/soumya1.jpeg"width="280px" height="350px"></img>
                <h2 className="card__name">Soumya Nanduri</h2>
                <h4 style={{textAlign:"center"}}>The National Institute of Engineering , 6th semester ISE</h4>
                <div className="social">
                        <div className="icon">
                        <a href={"https://www.linkedin.com/in/soumya-nanduri-a36ab9171/"}><img src="/images/linkedlnicon.png" width="50" height="50"></img></a>
                        </div>
                        <div className="icon" style={{marginTop:"-10px"}}>
                        <a href={"https://github.com/soumyananduri"}><img src="/images/github1.png" width="70" height="70" ></img></a>
                        </div>
                        <div  className="icon">
                        <a href={"https://www.instagram.com/soumyananduri/"}><img src="/images/instagram.png" width="50" height="50"></img></a>
                        </div> 
                </div>
            </div>
            
            <div className="card">
                <img src="/images/arya.jpeg"  width="280px" height="350px"></img>
                <h2 className="card__name">Arya AI</h2>
                <h4 style={{textAlign:"center"}}>The National Institute of Engineering , 6th semester ISE</h4>
                <div className="social">
                        <div className="icon">
                        <a href={""}><img src="/images/linkedlnicon.png" width="50" height="50"></img></a>
                        </div>
                        <div className="icon" style={{marginTop:"-10px"}}>
                        <a href={"https://github.com/AryaAI"}><img src="/images/github1.png" width="70" height="70" ></img></a>
                        </div>
                        <div  className="icon">
                        <a href={"https://www.instagram.com/rya.77715/"}><img src="/images/instagram.png" width="50" height="50"></img></a>
                        </div> 
                </div>
            </div>
            
            <div className="card">
            <img src="/images/maaj.jpeg" width="280px" height="350px"></img>
            <h2 className="card__name">Mohammed Maaz</h2>
                <h4 style={{textAlign:"center"}}>The National Institute of Engineering , 6th semester ISE</h4>
                <div className="social">
                        <div className="icon">
                        <a href={"https://www.linkedin.com/in/maaz-mohammed-8393591a1/"}><img src="/images/linkedlnicon.png" width="50" height="50"></img></a>
                        </div>
                        <div className="icon" style={{marginTop:"-10px"}}>
                        <a href={"https://github.com/maaz-mohammed"}><img src="/images/github1.png" width="70" height="70" ></img></a>
                        </div>
                        <div  className="icon">
                        <a href={"https://www.instagram.com/m.a.a.z._mohammed/"}><img src="/images/instagram.png" width="50" height="50"></img></a>
                        </div> 
                </div>
            </div>
       </div>
     </div>
    )
}

export default Developer
