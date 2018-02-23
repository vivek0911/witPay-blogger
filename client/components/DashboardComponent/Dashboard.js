import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Dashboard.scss';

class Dashboard extends Component {
  render() {
    return (<div className="homepage">
      <div className="middle">
        <h1 className="h1">Welcome</h1>
        <Link to="/home"><button>Click Here</button></Link>
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
