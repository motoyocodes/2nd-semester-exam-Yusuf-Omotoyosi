import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchTodoById } from "../../api/todoApi";

export const Route = createFileRoute("/todos/$id")({
  component: getATodo,
});

function getATodo() {
  const params = useParams({ strict: false });
  const id = params.id;

  const {
    data: todo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todo", id],
    queryFn: () => fetchTodoById(id),
    enabled: !!id,
  });
  if (isLoading) return <p>Loading todo...</p>;
  if (error) return <p>Failed to load todo.</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 via-white ">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md text-center ">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">{todo.title}</h2>
        <p className="text-gray-600 mb-4">
          Status:{" "}
          <span className={todo.completed ? "text-green-600" : "text-red-600"}>
            {todo.completed ? "✅ Completed" : "❌ Not completed"}
          </span>
        </p>
        <Link to="/todos">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            ← Back to Todos
          </button>
        </Link>
      </div>
    </div>
  );
}
