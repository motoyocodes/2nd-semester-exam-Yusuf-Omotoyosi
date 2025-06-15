import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

export const Route = createFileRoute("/todos/createNewTodo")({
  component: TodoForm,
});

export function TodoForm({ onAddTodo }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newTodo = { ...data, completed: false };
    onAddTodo(newTodo); // Call parent handler
    reset(); // Clear form
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4 space-y-2">
      <input
        placeholder="New todo title"
        {...register("title", { required: true })}
        className="bg-white/20 border border-white/20 text-white placeholder-white/70 font-semibold px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md shadow-md transition-all duration-300"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Add A Todo
      </button>
    </form>
  );
}
