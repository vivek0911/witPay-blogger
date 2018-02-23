import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import Homepage from '../components/HomeComponent/Homepage';
import syncActions from '../actions/syncActions';

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  showArticle(article) {
    this.props.dispatch(syncActions.showArticle(article));
    this.props.history.push('/blog');
  }

  render() {
    const that = this;
    return (
      <Homepage showArticle={that.showArticle.bind(that)} />
    );
  }
}
HomeContainer.defaultProps = {
  dispatch: () => {},
};
HomeContainer.propTypes = {
  dispatch: PropTypes.func,
};
const select = state => ({ x: state.articleReducer });
export default withRouter(connect(select)(HomeContainer));
