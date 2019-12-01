import React, { Component } from "react";
import '../common/style.css';

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSignedIn: false,
        }
        this.onSuccess = this.onSuccess.bind(this);
    }

    onSuccess() {
        this.setState({
            isSignedIn: true
        })
    }

    componentDidMount() {
        window.gapi.load('auth2', () => {
            this.auth2 = window.gapi.auth2.init({
                client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com'
            })
debugger
window.gapi.load('signin2', () => {
                var opts = {
                    width: 500,
                    height: 60,
                    onSuccess: this.onSuccess ,
                }
                window.gapi.signin2.render('loginButton', opts)
            })
        })
    }

    getContent = () => {
        if(this.state.isSignedIn){
            return <p>hello User, You're signed in. Welcome to the investment app.</p>
        }
        else{
            return(
                <div style={{display:'flex', alignItems: 'center', flexDirection:'column'}}>
                     <p>You are not signed in. Click here to sign in.</p>
                    <p id='loginButton'></p>
                </div>
            )
        }
    }

    render() {
        
        return(
            <div className='login'>
                <h2 style={{color: 'maroon'}}>Investment web app</h2>
                {this.getContent()}
            </div>
        )
    }
}

export default SignIn;