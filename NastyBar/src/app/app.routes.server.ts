import { RenderMode, ServerRoute } from '@angular/ssr';
import { getBlogIds } from '../prerender.config';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'blog/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: getBlogIds,
  },
];
