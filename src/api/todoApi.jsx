import axios from "axios";

const TODO_API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = async () => {
  try {
    const response = await axios.get(TODO_API_URL);
    console.log("Fetched todos:", response.data);
    console.log("Fetched todos:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching all todos:", error);
    throw error;
  }
};

export const fetchTodoById = async (id) => {
  try {
    const response = await axios.get(`${TODO_API_URL}/${id}`); // ✅
    return response.data;
  } catch (error) {
    console.error(`Error fetching todo with id ${id}:`, error);
    throw error;
  }
};
