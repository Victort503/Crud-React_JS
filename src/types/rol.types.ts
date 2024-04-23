export interface IGetRoles{ 
    id: number
    name: string
    isActive: boolean
}
export interface IResponseRoles{
    rol: IGetRoles[]
}

export interface ICreateRoles{ 
    name: string
}

export interface IUpdateRoles{ 
    name: string
}
