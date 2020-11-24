import {Component} from '@angular/core';
import {Observable} from 'rxjs';

export interface IPost {
  title: string;
  text: string;
}

export type TFilter = 'title' | 'text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  term = '';
  filter: TFilter = 'title';
  posts: Array<IPost> = [
    {title: 'Bread', text: 'The best bread in the world'},
    {title: 'Beer', text: 'German beer is good'},
    {title: 'JavaScript', text: 'JavaScrip the best language in the world'}
  ];

  date$: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  addPost() {
    this.posts.unshift({
      title: 'New post',
      text: 'My new post'
    });
  }
}
