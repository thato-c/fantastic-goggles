import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router'

export const routes: Routes = [
    {path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},

    // Blog (SSG)
    {path: 'blog', loadComponent: () => import('./blog/blog-list/blog-list.component').then(m => m.BlogListComponent)},
    {path: 'blog/:id', loadComponent: () => import('./blog/blog-post/blog-post.component').then(m => m.BlogPostComponent)},
];
