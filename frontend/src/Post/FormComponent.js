import React, { Component } from 'react'

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {...props.post};
  }

  changeFieldState = (fieldName) => (event) => {
    this.setState({[fieldName]: event.target.value});
  }

  render() {
    return (
      <div>
        <p>Title: <input onChange={this.changeFieldState("title")} value={this.state.title}/></p>
        <p>Body: <input onChange={this.changeFieldState("body")} value={this.state.body}/></p>
        <p>Category: <input onChange={this.changeFieldState("category")} value={this.state.category}/></p>
        <p>Author: <input onChange={this.changeFieldState("author")} value={this.state.author}/></p>
        <p><input type="submit" onClick={this.props.handleSubmit(this.state)} /></p>
      </div>
    )
  }
}

export default FormComponent;
