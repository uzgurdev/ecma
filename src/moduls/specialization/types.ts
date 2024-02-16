export namespace IEntity {
  export type Courses = {
    id: number;
    title: string;
  };

  export interface Specialization {
    id: number;
    name: string;
    description: string;
    courses: Courses[];
    info: "DEGREE" | "NO DEGREE";
    status: "Active" | "No Active";
  }
}

export interface IContext {
  state: IEntity.Specialization[];
  dispatch: React.Dispatch<any>;
}
