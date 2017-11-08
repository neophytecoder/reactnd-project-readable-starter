import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

import * as ForumAPI from '../utils/ForumAPI';
import { CATEGORIES } from "../stateConstants";
import { setCategories } from "../Category/actions";

class NavComponent extends Component {
  render() {
    console.log(this.props);
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#categoryNav"aria-controls="categoryNav"
          aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to={this.props.match.url} >Raddish</Link>


        <div className="collapse navbar-collapse" id="categoryNav">
          <div className="navbar-nav">
            <div className="nav-item active" key="home">
              <Link className="nav-link" to={this.props.match.url}>Home <span className="sr-only">(current)</span></Link>
            </div>

            {
              this.props.categories.map(
                category => (
                  <div key={category.name} className="nav-item">
                    <Link className="nav-link" to={`/category/${category.path}`}>
                      {category.name}
                    </Link>
                  </div>
                ))
            }
          </div>
        </div>
      </nav>
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
    categories: state[CATEGORIES],
    ...props
  }
};

const mapDispatchToProps = (dispatch) => ({
  setCategories: (categories) => dispatch(setCategories(categories))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavComponent));
