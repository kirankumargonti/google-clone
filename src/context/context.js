import React, {createContext, useContext, useReducer} from 'react';

const GoogleContext = createContext();

const GoogleStateProvider = ({children, initialState, reducer}) => (
  <GoogleContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </GoogleContext.Provider>
);

const useGoogleData = () => useContext(GoogleContext);

export {GoogleStateProvider, useGoogleData};