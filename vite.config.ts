import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			{ find: 'api', replacement: '/src/api' },
			{ find: 'assets', replacement: '/src/assets' },
			{ find: 'components', replacement: '/src/components' },
			{ find: 'context', replacement: '/src/context' },
			{ find: 'hooks', replacement: '/src/hooks' },
			{ find: 'models', replacement: '/src/models' },
			{ find: 'store', replacement: '/src/store' },
			{ find: 'pages', replacement: '/src/pages' },
			{ find: 'queries', replacement: '/src/queries' },
			{ find: 'utils', replacement: '/src/utils' },
		],
	},
	plugins: [react({
		// Only .tsx files
		include: '**/*.tsx'
	})],
	build: {
		outDir: 'build'
	}
})
