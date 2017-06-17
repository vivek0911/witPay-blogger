import React, { PropTypes } from 'react';
// import _ from 'lodash';
import './Homepage.scss';
import arti from '../../articles.json';

const HomeComponent = ({ showArticle }) => (
  <div className="home-wrapper">
    <div className="header">
      <b>Blogger</b>
      <div className="nav-bar">
        <p>Home</p>
        <p>Technology</p>
        <p>Romance</p>
        <p>Sports</p>
        <p>Entertainment</p>
      </div>
    </div>
    <div className="articles">
      {
        (arti.articles || []).map((x, key) => (
          <div className="container" key={key}>
            <div className="image">
              <img src={x.image} alt="Trolltunga Norway" />
            </div>
            <div className="detail">
              <p onClick={() => showArticle(x)}>{x.title}</p>
              <small className="prev">{x.previewText}</small>
              <div className="author">
                <img src={x.authImg} alt="Trolltunga Norway" />
                <div className="name">
                  <small>{x.author}</small>
                  <small>{x.timeStamp}</small>
                </div>
              </div>
            </div>
          </div>
        ))
        }
    </div>
    <div className="footer">
      <small>Help</small>
      <small>Term</small>
      <small>Contact</small>
      <small>Privacy</small>
      <small>About</small>
    </div>
  </div>
  );

HomeComponent.defaultProps = {
  showArticle: () => {},
};
HomeComponent.propTypes = {
  showArticle: PropTypes.func,
};

export default HomeComponent;
