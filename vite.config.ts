import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// 開発サーバー起動時に layerchart を prebundle する（エラーはこの時に発生していた）
	optimizeDeps: { include: ['layerchart'] }
});
