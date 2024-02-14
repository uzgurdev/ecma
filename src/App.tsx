import { useState } from "react";
import "./App.css";
import { Form } from "./components";
import Courses from "./components/courses";

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
      <Form />
      <Courses />
    </div>
  );
}

export default App;
