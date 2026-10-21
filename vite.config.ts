import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

// Portable TanStack Start configuration: Vercel detects Nitro automatically.
export default defineConfig({
  plugins: [tanstackStart({ server: { entry: "server" } }), nitro(), viteReact(), tailwindcss(), tsconfigPaths()],
});
