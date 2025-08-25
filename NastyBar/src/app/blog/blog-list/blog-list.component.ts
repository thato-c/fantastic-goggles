import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from '@angular/common';
import { BlogPost } from '../../models/blog.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnInit{
  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService){}
  
  ngOnInit(): void {
    this.blogPosts = this.blogService.getAllPosts();
  }
}
