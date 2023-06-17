import http from "../common/http";
import { IAssignment } from "../models/api/assignments";
export const getAssignments = async (): Promise<IAssignment[]> => {
  const response = await http.get<IAssignment[]>("assignments/");
  return response.data || [];
};

export const getArrayP_S = async (): Promise<number[][]> => {
  const response = await http.get<number[][]>("assignments/array-p-s");
  return response.data || [];
};
