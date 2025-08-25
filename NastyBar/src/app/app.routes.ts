import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router'

export const routes: Routes = [
    {path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},

    // Blog (SSG)
    {path: '', loadComponent: () => import('./blog/blog-list/blog-list.component').then(m => m.BlogListComponent)},
    {path: '', loadComponent: () => import('./blog/blog-post/blog-post.component').then(m => m.BlogPostComponent)},
    
];
