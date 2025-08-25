import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../models/blog.model';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  imports: [CommonModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent implements OnInit{
  post: BlogPost | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ){}

  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.blogService.getPostById(id);
  }
}
