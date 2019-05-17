import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      tweet:event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event =>this.handleChange(event)} value={this.state.tweet} name="message" id="message" />
        {this.props.maxChars- this.state.tweet.length}
      </div>
    );
  }
}

export default TwitterMessage;
