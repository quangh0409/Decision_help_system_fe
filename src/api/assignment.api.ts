import http from "../common/http";
import { IArray_Assignment, IAssignment } from "../models/api/assignments";
export const getAssignments = async (): Promise<IArray_Assignment> => {
  const response = await http.get<IArray_Assignment>("assignments/");
  return response.data || [];
};

export const getArrayP_S = async (): Promise<number[][]> => {
  const response = await http.get<number[][]>("assignments/array-p-s");
  return response.data || [];
};
export const getArrayT_S = async (): Promise<number[][]> => {
  const response = await http.get<number[][]>("assignments/array-t-s");
  return response.data || [];
};

export const getArrayT_P = async (): Promise<number[][]> => {
  const response = await http.get<number[][]>("assignments/array-t-p");
  return response.data || [];
};
