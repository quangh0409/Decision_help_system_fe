import http from "../common/http";
import { ITeacher } from "../models/api/teacher";
import { ResponseType } from "../types/response";
export const getTeachers = async (): Promise<ITeacher[]> => {
  const response = await http.get<ITeacher[]>("teachers/");
  return response.data || [];
};

export const createTeacher = async (teacher: ITeacher): Promise<ITeacher> => {
  const response = await http.post<ITeacher>("teachers/", teacher);
  return response.data;
};
