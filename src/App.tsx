import "./App.css";
import { UseReduce } from "./hooks";
import TableElm from "./components/table";
import NavItem from "./components/navigationBar";
import Barmenu from "./components/barmenu";
import SearchBar from "./components/searchbar";
import { useEffect, useState } from "react";
import { Main } from "./layouts";

function App() {
  const { state, dispatch } = UseReduce();
  const [data, setData] = useState([...state]);
  console.log("state: ", state);

  useEffect(() => {
    setData([...state]);
    console.log("data: ", data);
  }, [state]);

  return (
    <div className="App flex max-h-full items-start gap-[20px]">
      <NavItem />
      <Barmenu />
      <SearchBar />
      <div className="w-full mt-[8rem] flex min-h-screen items-start">
        <TableElm elements={data} />
        <Main />
      </div>
    </div>
  );
}

export default App;
