import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className='ui container comments'>
        <ApprovalCard>
            <div>
                <h4>Warning</h4>
                    Are you sure you want to do this?
                
            </div>
        </ApprovalCard>
        <ApprovalCard >
            <CommentDetail 
                author='Sam' 
                timeAgo='Today at 4:54pm' 
                content='Yay'
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard >
            <CommentDetail 
                author='Alex'
                timeAgo='Today at 3:54pm' 
                content='Huzzah'
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author='Jane'
                timeAgo='Today at 9:54am' 
                content='boo'
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>
         
        </div>
    );

};

ReactDOM.render(<App />,document.querySelector('#root'));