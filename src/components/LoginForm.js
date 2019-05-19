import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username: "", password: ""};
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.username.value === "" || event.target.password.value === "") {
      console.error("Input(s) are empty");
    } else {
      this.props.handleLogin({username: event.target.username.value, password: event.target.password.value})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange}/>
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
