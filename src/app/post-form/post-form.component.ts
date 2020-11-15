import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IPost} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})

export class PostFormComponent implements OnInit {
  @Output() onAdd = new EventEmitter<IPost>();
  @ViewChild('titleInput') titleInputRef: ElementRef<HTMLInputElement>;

  post: IPost = {
    title: '',
    content: ''
  };

  addPost() {
    const post: IPost = {
      ...this.post,
      id: Date.now()
    };

    this.onAdd.emit(post);
  }

  focusTitle() {
    this.titleInputRef.nativeElement.focus();
  }

  ngOnInit(): void {
  }

}
