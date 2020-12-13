import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuard} from './auth.guard';
import {PostResolver} from './post.resolver';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'about', component: AboutComponent, canActivateChild: [AuthGuard], children: [
      {path: 'extra', component: AboutExtraComponent}
    ]
  },
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
  {
    path: 'posts/:id',
    component: PostComponent,
    resolve: {
      post: PostResolver
    }
  },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
