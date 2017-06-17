import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import './Dashboard.scss';

class Dashboard extends Component {
  home() {
    this.props.dispatch(push('/home'));
  }
  render() {
    return (<div className="homepage">
      <div className="middle">
        <h1 className="h1">Welcome</h1>
        <button onClick={this.home.bind(this)}>Click Here</button>
      </div>
    </div>);
  }
}
Dashboard.defaultProps = {
  dispatch: () => {},
};
Dashboard.propTypes = {
  dispatch: PropTypes.func,
};
const select = state => ({ state });
export default connect(select)(Dashboard);
