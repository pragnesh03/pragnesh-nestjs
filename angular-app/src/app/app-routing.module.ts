import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsModule } from './posts/posts.module';

const routes: Routes = [{ path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) }, { path: 'post-detail', loadChildren: () => import('./post-detail/post-detail.module').then(m => m.PostDetailModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
