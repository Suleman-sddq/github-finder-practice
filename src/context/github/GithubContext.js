import React from 'react'
import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {

   const initialState = {
      repos: [],
      user: {},
      users: [],
      loading: false
   }
   const [state, dispatch] = useReducer(githubReducer, initialState);


   return <GithubContext.Provider value={{
      ...state,
      dispatch,
   }}>
      {children}
   </GithubContext.Provider>
}
export default GithubContext;