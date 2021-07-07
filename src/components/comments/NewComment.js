import React from 'react';
import faker from 'faker';

import ApprovalCard from '../approvalCard/ApprovalCard';
import CommentDetail from './CommentDetail';

const valuesObj = {
  img: faker.image.avatar(),
  author: 'Steve D',
  timeAgo: 'Yesterday at 5pm',
  text: 'Hello this is a test!',
};

export const NewComment = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail values={valuesObj} />
      </ApprovalCard>
      <ApprovalCard>
        <div className='center aligned header'>
          <h4>Warning!</h4>
        </div>
        This is a test
      </ApprovalCard>
    </div>
  );
};
