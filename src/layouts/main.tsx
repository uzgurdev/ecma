import React from "react";
import { useParams } from "react-router-dom";
import { UseReduce } from "../hooks";
import { Types } from "../moduls/specialization";

const Main = () => {
  const { specializationID } = useParams();
  const { state } = UseReduce();
  const [name, setName] = React.useState("");
  const [courses, setCourses] = React.useState<Types.IEntity.Courses[]>([]);

  React.useEffect(() => {
    const specialization = state.find((s) => s.id === Number(specializationID));
    if (specialization) {
      setName(specialization.name);
      setCourses(specialization.courses);
    }
  }, [specializationID, state]);

  return (
    <div
      className="w-[50%] min-h-[20vh] flex flex-col border overflow-y-auto rounded-[10px] overflow-hidden"
      style={{ boxShadow: "0px 8px 16px -8px #0F0F0F33" }}
    >
      <div className="w-full bg-[#353945] h-[40px]">
        <h2>{name}</h2>
      </div>
      {courses.length > 0 &&
        courses.map((course) => (
          <ul>
            <li>
              <span>{course.id + 1}</span> {course.title}
            </li>
          </ul>
        ))}
      {courses.length === 0 && (
        <div className="w-full h-[20vh] grid place-items-center text-[#B1B5C3]">
          INFO NO FOUND
        </div>
      )}
    </div>
  );
};

export default Main;
