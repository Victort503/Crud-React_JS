import axios from "axios";
import { ICreateRoles, IResponseRoles, IUpdateRoles } from "../types/rol.types";
import { API_URL } from "../utils/constans";

export const get_roles = () => {
  return axios.get<IResponseRoles>(API_URL + "/roles", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const delete_rol = (id: number) => {
  return axios.delete<IResponseRoles>(API_URL + `/roles/${id}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const create_rol = (payload: ICreateRoles) => {
  return axios.post<IResponseRoles>(API_URL + `/roles`, payload, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const update_rol = (id: number, payload: IUpdateRoles) => {
  return axios.patch<IResponseRoles>(API_URL + `/roles/${id}`, payload, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};
