import React from "react";
import { useParams } from "react-router-dom";
import { Courses, Form } from "../components";
import { Types } from "../moduls/specialization";
import { UseReduce } from "../hooks";

const Single = () => {
  const { specializationID } = useParams();
  const [newCourses, setNewCourses] = React.useState<Types.IEntity.Courses[]>(
    []
  );
  const [isUpdated, setIsUpdated] = React.useState(false);
  const { state, dispatch } = UseReduce();

  React.useEffect(() => {
    const specialization = state.find((s) => s.id === Number(specializationID));
    if (specialization) {
      setNewCourses(specialization.courses);
      setIsUpdated(true);
    }
  }, [specializationID]);

  function onCourses(course: Types.IEntity.Courses) {
    console.log("course: ", course);
    setNewCourses([...newCourses, course]);
  }

  function onRemCourses(courseID: number) {
    setNewCourses((prevCourses) =>
      prevCourses.filter((c) => c.id !== courseID)
    );
  }

  function onClearCourse() {
    setNewCourses([]);
  }

  return (
    <div className="flex items-center gap-[20px]">
      <Form Courses={newCourses} onDel={onRemCourses} onClear={onClearCourse} />
      <Courses onAddCourse={onCourses} onDelCourse={onRemCourses} />
    </div>
  );
};

export default Single;
