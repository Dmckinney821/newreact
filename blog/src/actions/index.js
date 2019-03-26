import jsonPlaceholder from '../apis/jsonPlaceholder';



export const fetchPosts = (props) => 
    async dispatch => {
    const response = await jsonPlaceholder.get('/posts')
    dispatch({ type: 'FETCH_POST', payload: response.data})
};



