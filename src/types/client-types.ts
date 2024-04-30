export interface IGetClients {
  id: number;
  name: string;
  dui: string;
  points: number;
  isActive: boolean;
}

export interface IResponseClient {
  client: IGetClients[];
}

export interface ICreateClient {
  name: string;
  dui: string;
  points: number;
}

export interface IUpdateClient {
  name: string;
  dui: string;
  points: number;
}
