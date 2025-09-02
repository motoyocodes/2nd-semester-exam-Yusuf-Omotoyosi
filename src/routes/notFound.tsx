// src/routes/not-found.jsx
import { createRoute } from "@tanstack/react-router";
import { Route as RootRoute } from "./__root";

// old way without static import of RootRoute
/*export const notFoundRoute = createRoute({
  getParentRoute: () => import("./__root").Route,
  path: "*",
  component: NotFoundPage,
}); */

export const notFoundRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "*",
  component: NotFoundPage,
});

export function NotFoundPage() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-red-600">404 – Page Not Found</h1>
      <p className="mt-4 text-lg">Sorry, that page doesn’t exist.</p>
      <a href="/" className="text-blue-500 hover:underline mt-4 block">
        Go back home
      </a>
    </div>
  );
}
