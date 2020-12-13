import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Post, PostsService} from './posts.service';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostResolver implements Resolve<Post>{
  constructor(
    private post: PostsService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> | Promise<Post> | Post {
    return of(this.post.getById(+route.params.id))
      .pipe(delay(1000));
  }
}
