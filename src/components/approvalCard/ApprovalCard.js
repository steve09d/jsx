import React from 'react';
import CommentDetail from '../comments/CommentDetail';

const ApprovalCard = props => {
  return (
    <div className='ui card'>
      <div className='content'>{props.children}</div>
      <div className='extra content'>
        <div className='ui two button'>
          <div className='ui basic green button'>Approved</div>
          <div className='ui basic red button'>Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
