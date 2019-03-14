import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className='ui container comments'>
            <CommentDetail 
                author='Sam' 
                timeAgo='Today at 4:54pm' 
                content='Yay'
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author='Alex'
                timeAgo='Today at 3:54pm' 
                content='Huzzah'
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author='Jane'
                timeAgo='Today at 9:54am' 
                content='boo'
                avatar={faker.image.avatar()}
            />
         
        </div>
    );

};

ReactDOM.render(<App />,document.querySelector('#root'));