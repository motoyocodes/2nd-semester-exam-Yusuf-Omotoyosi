import axios from "axios";

const TODO_API_URL = "https://jsonplaceholder.typicode.com/todos";

export const updateATodo = async (id, updatedTodo) => {
  const res = await axios.put(`${TODO_API_URL}/${id}`, updatedTodo);
  return res.data;
};
