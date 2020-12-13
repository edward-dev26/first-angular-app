import {Component, OnInit} from '@angular/core';
import {PostsService} from '../posts.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  showIds = false;

  constructor(
    readonly postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(query => {
      this.showIds = query.showIds === 'true';
    });

    this.route.fragment.subscribe(fragment => {
      console.log(fragment);
    });
  }

  toggleIds() {
    this.router.navigate(['/posts'], {
      queryParams: {showIds: !this.showIds},
      fragment: 'test-fragment'
    });
  }
}
