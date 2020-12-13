import {Component, OnInit} from '@angular/core';
import {Post} from '../posts.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => this.post = data.post);
  }

  loadPost() {
    this.router.navigate(['/posts', 44]);
  }
}
