import React from "react";
import { Context } from ".";
import { reducer, specializations } from "./store";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, specializations);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Container;
