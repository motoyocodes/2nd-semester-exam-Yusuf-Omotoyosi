import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { NotFoundPage } from "./routes/notFound";

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPage,
});
function App() {
  return <RouterProvider router={router} />;
}

export default App;
