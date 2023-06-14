import http from "../common/http";
import { IProject } from "../models/api/project";
export const getProjects = async (): Promise<IProject[]> => {
  const response = await http.get<IProject[]>("projects/");
  return response.data || [];
};

export const createProject = async (teacher: IProject): Promise<IProject> => {
  const response = await http.post<IProject>("projects/", teacher);
  return response.data;
};
