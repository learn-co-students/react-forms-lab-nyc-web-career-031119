import React from "react";

class TwitterMessage extends React.Component {
  state = {
    value: ''
  };

  handleChange = e => {
    const max = this.props.maxChars;
    if ( this.state.value.length < max ) {
      this.setState({
        value: e.target.value
      })
    }
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} name="message" id="message" onChange={this.handleChange}/>
        Characters left: {this.props.maxChars - this.state.value.length}
      </div>
    );
  }
}

export default TwitterMessage;
