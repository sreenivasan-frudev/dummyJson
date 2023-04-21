import { UserData } from "./user-data";

export interface getUsersState{
  users:UserData[];
}
export const initialState:getUsersState={
  users:[],
}
