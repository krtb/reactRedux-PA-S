import jsonPlaceholder from '../apis/jsonPlaceholder'

// define a function that's going to return a function
export const fetchPosts = () => 
    async dispatch => {

    const response = await jsonPlaceholder.get('/posts');
    
    dispatch({ type: 'FETCH_POSTS', payload: response.data})
};

export const fetchUser = () => {
    
};