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
    {title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, iusto!'},
    {title: 'Post 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, iusto!'},
    {title: 'Post 3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, iusto!'},
    {title: 'Post 4', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, iusto!'},
  ];
}
