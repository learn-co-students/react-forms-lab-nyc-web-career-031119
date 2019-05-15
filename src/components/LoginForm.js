import React from "react";

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      return {
        [field]: value
      }
    })
  };

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        if (this.state.password && this.state.username) {
          this.props.handleLogin(this.state);
          this.setState({username: '', password: ''})
        }
      }}>
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
