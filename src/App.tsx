import "./App.css";
import { UseReduce } from "./hooks";
import TableElm from "./components/table";
import NavItem from "./components/navigationBar";
import Barmenu from "./components/barmenu";
import SearchBar from "./components/searchbar";
import Footer from "./components/footer";

function App() {
  const { state, dispatch } = UseReduce();
  console.log("state: ", state);

  return (
    <div className="App flex items-center gap-[20px]">
      <Barmenu />
      <TableElm elements={state} />
      <NavItem />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
