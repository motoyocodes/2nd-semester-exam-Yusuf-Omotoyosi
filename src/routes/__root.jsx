import * as React from "react";
import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { NotFoundPage } from "./notFound.jsx";
const activeProps = {
  style: { color: "red", textDecoration: "underline", fontWeight: "bold" },
};

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundPage,
});

function RootComponent() {
  return (
    <>
      <Outlet />
    </>
  );
}
