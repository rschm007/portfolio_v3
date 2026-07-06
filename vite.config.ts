import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		// Resolve the path aliases defined in tsconfig.json natively (Vite 8+)
		tsconfigPaths: true,
	},
	server: {
		port: 3000,
		open: true,
	},
});
