import React,{ Component} from 'react';
import Typical from 'react-typical'
import GoogleLogin from 'react-google-login';
class Homepage extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    };
    responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
    }
    render(){
        return(

            <div className="container">

                <div className="login-container" width="800 " height="500">
                 <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'center',
                        justifyContent: 'center',
                        alignItems : 'flex-end',
                        padding:'4rem',
                    }}>
                {/* <h1>Hi, I'm <b>Endurance!</b></h1> */}
                <span style={{ fontStyle: 'italic', fontWeight:'bold', marginRight:'1rem' }}><h1>Hi, I'm <b>Endurance!</b></h1></span>
                <span style={{ fontStyle: 'italic', fontWeight:'bold', marginRight:'1rem' }}>
                    <p><b>I'm your{' '}
                    <Typical
                        loop = {Infinity}
                        wrapper = "b"
                        steps = {[
                            'Doctor',500,
                            'Health Assistant',500,
                            'Friend',500 
                        ]}
                    />
                </b> </p></span>
                 <div className="login-card">
                 <GoogleLogin
                clientId = "689207269600-knv3re643mnpvaksk3kei20s0rhk8h0j.apps.googleusercontent.com"
                buttonText="Login With Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
                </div>       
              
                </div>
            </div>
            </div>
            
        );
    }
}

export default Homepage;