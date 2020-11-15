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

}
