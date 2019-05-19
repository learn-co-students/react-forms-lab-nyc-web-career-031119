import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''


    };
  }




  handleInputChange = (e) =>{
    console.log("input user");
    this.setState({
      [e.target.name]: e.target.value

    });
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    if ((this.state.username.length > 0) &&(this.state.password.length > 0)){
      console.log(this.state.username)
      console.log(this.state.password)
      this.props.handleLogin(this.state.username, this.state.password)

    } else{
      console.log("Please enter a username and password")
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
