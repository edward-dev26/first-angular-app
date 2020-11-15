import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPost} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent {
  @Input() post: IPost;
  @Output() onDelete = new EventEmitter<number>();

  deletePost() {
    this.onDelete.emit(this.post.id);
  }
}
