import { IEntity } from "./types";

const specializations: IEntity.Specialization[] = [
  {
    id: 0,
    name: "Computer Science",
    description: "This is the description of Computer Science",
    courses: [
      {
        id: 0,
        title: "Java Development",
        isAdded: true,
      },
      {
        id: 1,
        title: "Flutter",
        isAdded: true,
      },
    ],
    info: "DEGREE",
    status: "Active",
  },
  {
    id: 1,
    name: "Foundation",
    description: "This is the description of Computer Science",
    courses: [
      {
        id: 0,
        title: "Java Development",
        isAdded: true,
      },
      {
        id: 10,
        title: "React",
        isAdded: true,
      },
    ],
    info: "DEGREE",
    status: "No Active",
  },
  {
    id: 2,
    name: "Foundation",
    description: "This is the description of Computer Science",
    courses: [
      {
        id: 0,
        title: "Java Development",
        isAdded: true,
      },
      {
        id: 1,
        title: "Flutter",
        isAdded: true,
      },
    ],
    info: "NO DEGREE",
    status: "Active",
  },
];

const courses: IEntity.Courses[] = [
  {
    id: 0,
    title: "Java Development",
    isAdded: false,
  },
  {
    id: 1,
    title: "Flutter",
    isAdded: false,
  },
  {
    id: 2,
    title: "iOS Development",
    isAdded: false,
  },
  {
    id: 3,
    title: "Database",
    isAdded: false,
  },
  {
    id: 4,
    title: "Java Backend",
    isAdded: false,
  },
  {
    id: 5,
    title: "Android",
    isAdded: false,
  },
  {
    id: 6,
    title: "Django",
    isAdded: false,
  },
  {
    id: 7,
    title: "Python Development",
    isAdded: false,
  },
  {
    id: 8,
    title: "FrontEnd",
    isAdded: false,
  },
  {
    id: 9,
    title: "Angular",
    isAdded: false,
  },
  {
    id: 10,
    title: "React",
    isAdded: false,
  },
  {
    id: 11,
    title: "Vue",
    isAdded: false,
  },
  {
    id: 12,
    title: "MERN Stack",
    isAdded: false,
  },
  {
    id: 13,
    title: "NodeJs Backend",
    isAdded: false,
  },
  {
    id: 14,
    title: "JS Full Stack",
    isAdded: false,
  },
  {
    id: 15,
    title: "MERN Stack",
    isAdded: false,
  },
  {
    id: 16,
    title: "NodeJs Backend",
    isAdded: false,
  },
  {
    id: 17,
    title: "JS Full Stack",
    isAdded: false,
  },
  {
    id: 18,
    title: "Android",
    isAdded: false,
  },
  {
    id: 19,
    title: "Django",
    isAdded: false,
  },
  {
    id: 20,
    title: "Python Development",
    isAdded: false,
  },
];

const reducer = (state: IEntity.Specialization[], action: any) => {
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

    case "UPDATE_SPECIALIZATION":
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

export { courses, specializations, reducer };
