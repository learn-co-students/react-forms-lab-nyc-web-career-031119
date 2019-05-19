import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
     value: ''
    };
  }


  handleTypeInput = (e) =>{
    console.log("input stuff");
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    console.log(this.state.value);
    return (
      <div>
        <strong>Your message:</strong>

        <input type='text'  name="message" id="message" value={this.state.value} onChange={this.handleTypeInput}/>

        <p>Character counter: {this.props.maxChars - this.state.value.length}</p>

      </div>
    );
  }
}

export default TwitterMessage;
