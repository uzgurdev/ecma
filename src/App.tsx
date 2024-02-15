import { useState } from "react";
import "./App.css";
import { Form } from "./components";
import Courses from "./components/courses";
import Barmenu from "./components/barmenu";
import NavItem from "./components/navigationBar";
import SearchBar from "./components/searchbar";
import Footer from "./components/footer";

function App() {
  const [courses, setCourses] = useState([
    "react",
    "vue",
    "angular",
    "java",
    "java backend",
  ]);
  const [specializeCourse, setSpecializeCourse] = useState([]);

  return (
    <div className="App flex items-center gap-[20px]">
       <Barmenu />
      <NavItem  />
      <SearchBar />
      <Form />
      <Courses />
      <Footer/>
    </div>
  );
}

export default App;
