import {Component} from '@angular/core';

export interface IPost {
  title: string;
  content: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Hello Angular World';
  posts: Array<IPost> = [
    {id: 1, title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, iusto!'},
    {id: 2, title: 'Post 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, iusto!'},
    {id: 3, title: 'Post 3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, iusto!'},
    {id: 4, title: 'Post 4', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, iusto!'},
  ];

  addPost(post) {
    this.posts.unshift(post);
  }

  deletePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id);
  }
}
