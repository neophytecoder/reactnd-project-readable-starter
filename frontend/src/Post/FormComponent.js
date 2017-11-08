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
      <div className="row" style={{marginTop: '1em'}} >
        <div className="form-group col-5">
          <label>Title</label>
          <input className="form-control" onChange={this.changeFieldState("title")}
            value={this.state.title} placeholder="title"/>
        </div>
        <div className="w-100" />
        <div className="form-group col-5">
          <label>Body</label>
          <input className="form-control" onChange={this.changeFieldState("body")} placeholder="body" value={this.state.body}/>
        </div>
        <div className="w-100" />
        <div className="form-group col-5">
          <label>Category</label>
          <input className="form-control" onChange={this.changeFieldState("category")} placeholder="category" value={this.state.category}/>
        </div>
        <div className="w-100" />
        <div className="form-group col-5">
          <label>Author</label>
          <input className="form-control" onChange={this.changeFieldState("author")} placeholder="author" value={this.state.author}/>
        </div>

        <div className="w-100" />
        <div className="form-group col-5">
          <input className="btn btn-primary" type="submit" onClick={this.props.handleSubmit(this.state)} />
        </div>
      </div>
    )
  }
}

export default FormComponent;
