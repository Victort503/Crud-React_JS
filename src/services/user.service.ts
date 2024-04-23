import axios from "axios"
import { ICreateUsers, IResponseUsers, IUpdateUsers} from "../types/user.types"
import { API_URL } from "../utils/constans"

export const get_users = ()=> {
    return axios.get<IResponseUsers>(API_URL +  "/users")
}

export const delete_users = (id: number) => {
    return axios.delete<IResponseUsers>(API_URL +  `/users/${id}`)
}

export const create_users = (payload: ICreateUsers) => {
    return axios.post<IResponseUsers>(API_URL + `/users`, payload)
}

export const update_users = (id: number, payload: IUpdateUsers) => {
    return axios.patch<IResponseUsers>(API_URL + `/users/${id}`, payload)
}
