import 'vue-router';
import type { FunctionalComponent } from 'vue';

declare module 'vue-router' {
  interface RouteMeta {
    title: string;
    sort?: number;
    isHide?: boolean;
    icon?: FunctionalComponent;
    single?: boolean;
    routeParams?: RouteLocationNormalized['params'];
    routeQuery?: RouteLocationNormalized['query'];
  }
}
