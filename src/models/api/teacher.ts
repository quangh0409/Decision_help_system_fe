export interface ITeacher {
  id: string;
  name: string;
  phone: string;
  email: string;
  specialize: ISpecialize[];
}

export interface ISpecialize {
  name: string;
  coincidence: number;
}
