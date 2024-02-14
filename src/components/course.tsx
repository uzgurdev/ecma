import React from "react";
import { AddIcon, ExitIcon } from "../assets";

interface CourseProps {
  id: string;
  name: string;
  onAdd(id: string): void;
}

const Course: React.FC<CourseProps> = ({ id, name, onAdd }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const classes =
    "h-[80px] w-[30px] rounded-l-[900px] rounded-r-[20px] bg-[#45B26B]";
  const classesExit =
    "h-[80px] w-[30px] rounded-l-[900px] rounded-r-[20px] bg-[#EF466F]";
  const classesCourseActive =
    "w-[264px] h-[87px] flex items-center justify-between pl-[24px] pr-1 relative rounded-[8px] bg-[#F4F5F6]";
  const classesCourseInactive =
    "w-[264px] h-[87px] bg-[#23262F] flex items-center justify-between pl-[24px] pr-1 relative rounded-[8px]";

  const handleClick = () => {
    setIsAdded((prev) => !prev);
    onAdd(id);
  };

  return (
    <div className={isAdded ? classesCourseActive : classesCourseInactive}>
      <h2
        className={
          isAdded ? "text-[#B1B5C3] text-[18px]" : "text-white text-[18px]"
        }
      >
        {name}
      </h2>
      <button
        className={!isAdded ? classes : classesExit}
        onClick={handleClick}
      >
        {!isAdded ? <AddIcon /> : <ExitIcon />}
      </button>
    </div>
  );
};

export default Course;
