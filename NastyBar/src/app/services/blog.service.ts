import { Injectable } from "@angular/core";
import { BlogPost } from "../models/blog.model";

@Injectable({
    providedIn: 'root'
})
export class BlogService{
    private blogPosts: BlogPost[] = [
        { id: 1, title: 'Introduction to Angular', author: 'Thato Chitja', date: '2025-08-26', content: 'Angular is a platform for building mobile and desktop web applications...' },
        { id: 2, title: 'Understanding TypeScript', author: 'Jane Doe', date: '2025-08-25', content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript...' },
        { id: 3, title: 'Building a Blog App', author: 'John Smith', date: '2025-08-24', content: 'In this tutorial, we will build a simple blog application using Angular...' }
    ];

    constructor() { }

    getAllPosts(): BlogPost[]{
        return this.blogPosts;
    }

    getPostById(id:number): BlogPost | undefined{
        return this.blogPosts.find(post => post.id === id);
    }
}