export interface IProduct {
  id?: number,
  name: string,  
  amount: string,
  createdAt: Date,
}

export interface IUser {
  id?: number,
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface Payload {
  username: string;
  classe: string;
  level: number;
}