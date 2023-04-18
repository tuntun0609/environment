import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
	plugins: [],
	build: {
		outDir: 'lib',
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'environment',
			formats: ['es', 'umd']
		}
	}
});

