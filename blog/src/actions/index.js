import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = () => {
    return function(dispatch, getState) {
        const promise = jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: })
    };
};