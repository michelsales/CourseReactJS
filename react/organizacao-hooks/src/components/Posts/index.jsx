import { useContext, useEffect, useRef } from "react";

import { loadposts } from "../../contexts/PostsProvider/actions";
import { PostsContext } from "../../contexts/PostsProvider/context";

import { decrementCounter, incrementCounter } from "../../contexts/CounterProvider/actions";
import { CounterContext } from "../../contexts/CounterProvider/context";


export const Posts = () => {
  const isMounted = useRef(true);

  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;
  
  const counterContext = useContext( CounterContext );
  const { counterState, counterDispatch } = counterContext;

  console.log(isMounted.current);

  useEffect(() => {
    loadposts(postsDispatch).then(dispatch => {
      if(isMounted.current){
        dispatch(); 
      }
    });

    return () => {
      isMounted.current = false;
    }
  }, [postsDispatch]);

  return (
    <div>
      <h1>posts</h1>
       <button onClick={() => incrementCounter(counterDispatch)}>Counter: {counterState.counter} +</button> 
       <button onClick={() => decrementCounter(counterDispatch)}>Counter: {counterState.counter} -</button> 
        
        {postsState.loading && (
        <p>
          <strong>Carregando posts...</strong>
        </p>
      )}
      {postsState.posts.map((p) => (
        <p key={p.id}>{p.title}</p>
        ))}
    </div>
  );
}