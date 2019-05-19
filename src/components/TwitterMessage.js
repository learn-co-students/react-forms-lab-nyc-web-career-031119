import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  handleInputValue = (e) => {
    // console.log(e.target.value)
    if (e.target.value.length <= 140) {
      this.setState({value: e.target.value})
    }
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={this.handleInputValue}
          value={this.state.value}
        /><br />
        <strong>Characters Left:
          {this.props.maxChars - this.state.value.length}
        </strong>
      </div>
    );
  }
}

export default TwitterMessage;
