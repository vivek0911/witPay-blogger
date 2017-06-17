import React, { PropTypes } from 'react';
import './Blog.scss';
import cmnts from '../../comments.json';

const BlogComponent = ({ article, onLike, like }) => (
  <div className="blog-wrapper">
    <div className="header">
      <strong className="title">Thellily</strong>
      <small>follow</small>
      <div className="login">Log in/Sign up</div>
    </div>
    <div className="body">
      <div className="author">
        <img src={article.authImg} alt="Trolltunga Norway" />
        <div className="name">
          <p>{article.author}</p>
          <small>{article.timeStamp}</small>
        </div>
      </div>
      <h1>{article.title}</h1>
      <p className="prev-text">{article.previewText}</p>
      <img className="blog-img" src={article.image} alt="Trolltunga Norway" />
      <p className="arti-body">{article.body}</p>
    </div>
    <div className="footer">
      <strong className="title">Commnets</strong>
      <textarea cols="100" rows="5" placeholder="Write your comment here" />
      {
          (cmnts.comments || []).map((x, key) => (
            <div className="cmnt-container" key={key}>
              <div className="author">
                <img src={x.userImg} alt="Trolltunga Norway" />
                <div className="name">
                  <small>{x.userName}</small>
                  <small>{x.date}</small>
                </div>
              </div>
              <p className="cmnt-body">{x.body}</p>
              {
                  like === key ?
                    <i className="fa fa-heart-o love" aria-hidden="true" style={{ fontSize: '1.5em', color: '#F5498B' }} onClick={() => onLike(key)} /> :
                    <i className="fa fa-heart-o love" aria-hidden="true" style={{ fontSize: '1.5em' }} onClick={() => onLike(key)} />
              }
            </div>
          ))
      }
    </div>
  </div>
  );

BlogComponent.defaultProps = {
  onLike: () => {},
  article: {},
  like: '',
};
BlogComponent.propTypes = {
  article: PropTypes.object,
  onLike: PropTypes.func,
  like: PropTypes.number,
};
export default BlogComponent;
