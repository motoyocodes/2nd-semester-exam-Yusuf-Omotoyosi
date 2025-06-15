// src/routes/not-found.jsx
import { createRoute } from "@tanstack/react-router";

// attach this under your rootRoute (parent = __root__)
export const notFoundRoute = createRoute({
  getParentRoute: () => import("./__root").Route,
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
