import { create } from "zustand";
import { IRolesStore } from "../types/rol-store.types";
import { create_rol, delete_rol, get_roles, update_rol } from "../services/rol.service";
import { ICreateRoles, IUpdateRoles } from "../types/rol.types";

export const useRolesStore = create<IRolesStore>((set, get) => ({
    rol: [],
    OnGetRoles: () => {
        get_roles().then(({ data }) => {
            set({
                rol: data.rol
            })
        })
    }, OnDelete: (id: number) => {
        delete_rol(id).then(() => {
            get().OnGetRoles()
        })
    }, OnCreate: (payload: ICreateRoles) => {
        create_rol(payload).then(() => {
            get().OnGetRoles()
        })
    },     OnUpdate: (id: number, payload: IUpdateRoles) => {
        update_rol(id, payload).then(() => {
            get().OnGetRoles();        
        })
    },
}));