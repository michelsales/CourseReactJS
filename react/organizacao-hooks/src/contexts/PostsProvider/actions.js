import * as types from './types';

export const loadposts = async ( dispatch ) => {
  dispatch({ type: types.POSTS_LOADING});

  const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsRaw.json();
  
  return() => dispatch({type: types.POSTS_SUCCESSS, payload: posts});
  
};