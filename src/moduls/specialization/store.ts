import { IEntity } from "./types";

const specializations: IEntity.Specialization[] = [
  {
    id: 1,
    name: "Computer Science",
    description: "This is the description of Computer Science",
    courses: [
      {
        id: 1,
        title: "Intro to Computer Science",
      },
      {
        id: 2,
        title: "Intro to Programming",
      },
    ],
    info: "DEGREE",
    status: "Active",
  },
];

const courses: IEntity.Courses[] = [
  {
    id: 0,
    title: "Java Development",
  },
  {
    id: 1,
    title: "Flutter",
  },
  {
    id: 2,
    title: "iOS Development",
  },
  {
    id: 3,
    title: "Database",
  },
  {
    id: 4,
    title: "Java Backend",
  },
  {
    id: 5,
    title: "Android",
  },
  {
    id: 6,
    title: "Django",
  },
  {
    id: 7,
    title: "Python Development",
  },
  {
    id: 8,
    title: "FrontEnd",
  },
  {
    id: 9,
    title: "Angular",
  },
  {
    id: 10,
    title: "React",
  },
  {
    id: 11,
    title: "Vue",
  },
  {
    id: 12,
    title: "MERN Stack",
  },
  {
    id: 13,
    title: "NodeJs Backend",
  },
  {
    id: 14,
    title: "JS Full Stack",
  },
  {
    id: 15,
    title: "MERN Stack",
  },
  {
    id: 16,
    title: "NodeJs Backend",
  },
  {
    id: 17,
    title: "JS Full Stack",
  },
  {
    id: 18,
    title: "Android",
  },
  {
    id: 19,
    title: "Django",
  },
  {
    id: 20,
    title: "Python Development",
  },
];

const courseReducer = (state: IEntity.Specialization[], action: any) => {
  switch (action.type) {
    case "ADD":
      return state.map((specialization) => {
        if (specialization.id === action.payload.specializationId) {
          return {
            ...specialization,
            courses: [...specialization.courses, action.payload.course],
          };
        }
        return specialization;
      });

    case "REMOVE":
      return state.map((specialization) => {
        if (specialization.id === action.payload.specializationId) {
          return {
            ...specialization,
            courses: specialization.courses.filter(
              (course) => course.id !== action.payload.courseId
            ),
          };
        }
        return specialization;
      });

    case "RESET":
      return state.map((specialization) => {
        const oldCourses = [...specialization.courses];

        return {
          ...specialization,
          courses: [...oldCourses],
        };
      });

    default:
      return state;
  }
};

const specReducer = (state: IEntity.Specialization[], action: any) => {
  switch (action.type) {
    case "ADD":
      return state.map((specialization) => {
        if (specialization.id === action.payload.specializationId) {
          return {
            ...specialization,
            name: action.payload.title,
            description: action.payload.description,
            info: action.payload.info,
            status: action.payload.status,
          };
        }
        return specialization;
      });

    case "UPDATE_NAME_AND_DESCRIPTION":
      return state.map((specialization) => {
        if (specialization.id === action.payload.specializationId) {
          return {
            ...specialization,
            name: action.payload.title,
            description: action.payload.description,
          };
        }
        return specialization;
      });

    default:
      return state;
  }
};

export { courses, specializations, courseReducer, specReducer };
