import { ICreateRoles, IGetRoles, IUpdateRoles } from "./rol.types";

export interface IRolesStore{
    rol: IGetRoles[]
    OnGetRoles: ()=> void 
    OnDelete: (id: number) => void
    OnCreate:(payload: ICreateRoles)=> void
    OnUpdate:(id : number, payload: IUpdateRoles)=> void
}
