import React,{ Component} from 'react';
import { Navbar,NavbarBrand,Nav,NavbarToggler,Collapse,NavItem,Jumbotron, Form, FormGroup, Label, Input, Card } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import {Button,Modal,ModalHeader,ModalBody} from 'reactstrap';
import {FaCheck} from 'react-icons/fa';
import { IconContext } from "react-icons";

class Homepage extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    };

    render(){
        return(
            <div className="container">
                
                <div className="hero" width="800 " height="500">
                    
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'center',
                        justifyContent: 'ceter',
                        alignItems : 'flex-end',
                        padding:'4rem',
                    }}>
                        <span style={{ fontStyle: 'italic', fontWeight:'bold', marginRight:'6rem' }}><h2>TechMedica</h2></span>
                        <h4>Provide best quality healthcare for you </h4>
                            <div className="herocard" >
                            <ul className="list">
                                <li><h5><IconContext.Provider value={{size:"1em", color:'green'}}> <FaCheck/> </IconContext.Provider> Affordable monthly premium packages</h5>  Lorem ipsum dolor sit amet, in verterem persecuti vix, sit te meis</li>
                                <li><h5><IconContext.Provider value={{size:"1em", color:'green'}}> <FaCheck/> </IconContext.Provider>Choose your favourite doctor</h5>Lorem ipsum dolor sit amet, in verterem persecuti vix, sit te meis</li>
                                <li><h5><IconContext.Provider value={{size:"1em", color:'green'}}> <FaCheck/> </IconContext.Provider>Only use friendly environment</h5>Lorem ipsum dolor sit amet, in verterem persecuti vix, sit te meis</li>
                                
                            </ul>

                            </div>
                    </div>   
                </div>
            </div>
        );
    }
}

export default Homepage;