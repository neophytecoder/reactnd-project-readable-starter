import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as ForumAPI from '../utils/ForumAPI';
import { CATEGORIES } from "../stateConstants";
import { setCategories } from "./actions";

class NavComponent extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
        <li key="home">
          <Link to="/">Home</Link>
        </li>
        {
          this.props.categories.map(
            category => (
              <li key={category.name}>
                <Link to={`/category/${category.path}`}>
                  {category.name}
                </Link>
              </li>
            ))
        }
        </ul>
      </div>
    )
  }

  componentDidMount() {
    ForumAPI.getAllCategories()
      .then(data => {
        this.props.setCategories(data);
      });
  }
}

const mapStateToProps = (state, props) => {
  return {
    categories: state[CATEGORIES]
  }
};

const mapDispatchToProps = (dispatch) => ({
  setCategories: (categories) => dispatch(setCategories(categories))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavComponent);
