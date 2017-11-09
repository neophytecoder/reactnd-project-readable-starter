import React, { Component } from 'react'
import { connect } from 'react-redux'

class SelectCategoryDropdown extends Component {
  render() {
    return (
      <select className="form-control" onChange={this.props.onChange} placeholder="category" value={this.props.value} disabled={this.props.disabled}>
        {
          this.props.categories.map(category => {
            return (<option key={category.name} value={category.name}>{category.name}</option>);
          })
        }
      </select>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    categories: state.categories,
    ...props
  }
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCategoryDropdown);
