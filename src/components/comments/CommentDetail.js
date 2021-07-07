import React from 'react';

const CommentDetail = ({ values: { img, author, timeAgo, text } }) => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img src={img} alt='avatar' />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {author}
        </a>
        <div className='metadata'>
          <span className='date'>{timeAgo}</span>
        </div>
        <div className='text'>{text}</div>
      </div>
    </div>
  );
};
/*
const propTypes = state => {
  author: state.author
}*/

export default CommentDetail;
