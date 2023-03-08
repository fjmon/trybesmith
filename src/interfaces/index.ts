export interface IProduct {
  id?: number,
  name: string,  
  amount: string,
  createdAt: Date,
}

export interface IUser {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface Payload {
  username: string;
  vocation: string;
  level: number;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IOrder {
  id?: number,
  userId: number,
  productsIds: number[],
}

export interface DataDecoded {
  id: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface IDecoded {
  data: DataDecoded,
  iat: number,
  exp: number
}

export interface IProductsIds {
  productsIds: number[],
}

export interface ILogPayload {
  id: number;
  email: string;
  name: string;
}
