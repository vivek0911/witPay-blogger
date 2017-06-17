import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';
import Blog from '../components/BlogComponent/Blog';

class BlogContainer extends Component {
  constructor() {
    super();
    this.state = {
      like: '',
    };
  }
  onLike(key) {
    this.setState({ like: key });
  }
  render() {
    const that = this;
    return (
      <Blog
        article={that.props.article}
        onLike={that.onLike.bind(that)}
        like={that.state.like}
      />
    );
  }
}
Blog.defaultProps = {
  dispatch: () => {},
};
Blog.propTypes = {
  dispatch: PropTypes.func,
};
const select = state => ({ article: state.articleReducer.article });
export default connect(select)(BlogContainer);
