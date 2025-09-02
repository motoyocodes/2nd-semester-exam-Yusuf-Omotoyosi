import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/crash")({
  component: CrashComponent,
});

function CrashComponent() {
  throw new Error("Forced crash: Component encountered a critical issue.");
}
