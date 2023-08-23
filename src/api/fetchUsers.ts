import axios from "axios";
import { IUser } from "../models/IUser";

export const fetchUsers = async () => {
  const { data } = await axios.get<IUser[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
};

export const fetchUser = async (id: number) => {
  const { data } = await axios.get<IUser>(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return data;
};
