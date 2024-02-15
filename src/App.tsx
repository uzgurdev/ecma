import { useState } from "react";
import "./App.css";
import { Form } from "./components";
import Courses from "./components/courses";
import { UseReduce } from "./hooks";
import TableElm from "./components/table";

function App() {
  const { state, dispatch } = UseReduce();
  console.log("state: ", state);

  return (
    <div className="App flex items-center gap-[20px]">
      <TableElm elements={state} />
    </div>
  );
}

export default App;
