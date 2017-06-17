import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import _ from 'lodash';
import Homepage from '../components/HomeComponent/Homepage';
import syncActions from '../actions/syncActions';

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
        user: false
    };
  }

  showArticle(article) {
      this.props.dispatch(syncActions.showArticle(article));
      this.props.dispatch(push('/blog'))
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
const select = state => ({ state });
export default connect(select)(HomeContainer);
