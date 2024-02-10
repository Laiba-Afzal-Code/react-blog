import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reduce";
const INSHALL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFatching: false,
  error: false,
};
export const Context = createContext(INSHALL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INSHALL_STATE);

  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user))
  }, [state.user])
  return (
    <Context.Provider
      value={{
        user: state.user,
        isFatching: state.isFatching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
