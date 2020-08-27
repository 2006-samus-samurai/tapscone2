import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import axios from 'axios'

const CLIENT_ID =
  "506202294134-6q0se8hgfiujrhaqi779dr81020tffo5.apps.googleusercontent.com";

class GoogleBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: "",
      userName: '',
      userImageUrl: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  async login(response) {
    console.log('Login Success: currentUser:', response.profileObj);
    if (response.accessToken) {
      try {
       await axios.post(`/auth/login`, response.profileObj)
        
      } catch (error) {
        
      }
      this.setState((state) => ({
        isLogined: true,
        accessToken: response.accessToken,
        userName: response.profileObj.name,
        userImageUrl: response.profileObj.imageUrl  
      }));
    }
  }


  logout(response) {
    this.setState((state) => ({
      isLogined: false,
      accessToken: ""
    }));
  }

  handleLoginFailure(response) {
    alert("Failed to log in");
  }

  handleLogoutFailure(response) {
    alert("Failed to log out");
  }

  render() {
    return (
      <div>
        {this.state.isLogined ? (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.logout}
            onFailure={this.handleLogoutFailure}
          />
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Login"
            onSuccess={this.login}
            onFailure={this.handleLoginFailure}
            cookiePolicy={"single_host_origin"}
            responseType="code,token"
          ></GoogleLogin>
        )}
        { this.state.isLogined? <h5>Welcome {this.state.userName} <br/><br/> <img src={this.state.userImageUrl} alt='userImage'/> </h5> : null }
      </div>
      
    );
  }
}

export default GoogleBtn;

