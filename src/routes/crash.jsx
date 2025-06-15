import { createFileRoute } from "@tanstack/react-router";

function CrashComponent() {
  throw new Error("Forced crash: Component encountered a critical issue.");
}

export const Route = createFileRoute("/crash")({
  component: CrashComponent,
});
