import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      chars: 0,
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
      chars: e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.text} type="text" name="message" id="message" onChange={this.handleChange}/>
        <p>Remaining characters: {this.props.maxChars - this.state.chars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
