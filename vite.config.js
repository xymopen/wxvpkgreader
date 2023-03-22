import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return {
		root: "src/",
		base: process.env.VITE_BASE_URL,
		build: {
			outDir: "../dist"
		}
	};
});
