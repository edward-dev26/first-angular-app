import {Pipe, PipeTransform} from '@angular/core';
import {IPost, TFilter} from '../app.component';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(posts: Array<IPost>, term: string, filter: TFilter = 'title'): Array<IPost> {
    if (!term.trim()) {
      return posts;
    }

    return posts.filter(post => post[filter].toLowerCase().includes(term.toLowerCase()));
  }
}
