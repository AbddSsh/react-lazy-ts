import axios from "axios";
import { ITodo } from "../models/ITodo";

export const fetchTodos = async () => {
  const { data } = await axios.get<ITodo[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return data;
};

export const fetchTodo = async (id: number) => {
  const { data } = await axios.get<ITodo>(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return data;
};
