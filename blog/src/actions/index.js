import jsonPlaceholder from '../apis/jsonPlaceholder'

// define a function that's going to return a function
export const fetchPosts = () => 
    async dispatch => {

    const response = await jsonPlaceholder.get('/posts');
    
    dispatch({ type: 'FETCH_POSTS', payload: response.data})
};

// pass in ID of user we want to fetch, as arg
// create a func that returns a func
export const fetchUser = (id) => async dispatch => {

    const response = await jsonPlaceholder.get(`/users/ + ${id}`)

    dispatch({type: 'FETCH_USER', payload: response.data})
};