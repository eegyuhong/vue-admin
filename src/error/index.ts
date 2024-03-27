import type { App } from 'vue';

export function setupErrorHandler(app: App<Element>) {
  app.config.errorHandler = (e) => {
    console.error(e);
  };
}
