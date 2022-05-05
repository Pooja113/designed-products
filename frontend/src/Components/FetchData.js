import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
  loading: true,
  post:{},
  error: ''
}

const reducer = (state,action) =>{
  switch(action.type){
    case 'FETCH_DATA':
      return {
        loading:false,
        post: action.payload,
        error: ''
      }
      case 'FETCH_ERROR':
        return {
          loading:false,
          post:{},
          error: action.payload
        }
  }
}
const FetchData = () => {
  const[state,dispatch] = useReducer(reducer,initialState);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => dispatch({type: 'FETCH_DATA', payload: res.data }))
    .catch(err => dispatch({type: 'FETCH_ERROR', payload: "Something Went Wrong" }))
  },[])


  return (
    <div>
      {state.post.title}
      {state.error}
    </div>
  )
}


export default FetchData

