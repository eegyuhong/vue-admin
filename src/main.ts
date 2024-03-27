import { createApp } from 'vue';
import App from './App.vue';

import '@unocss/reset/tailwind-compat.css';
import '@/styles/index.scss';
import 'virtual:uno.css';

import { setupStore } from '@/stores';
import { setupRouter } from '@/router';
import { setupErrorHandler } from '@/error';

function setupApp() {
	const app = createApp(App);

	// Configure store
	setupStore(app);

	// Configure router
	setupRouter(app);

	// Configure error
	setupErrorHandler(app);

	app.mount('#app');
}

setupApp();
