import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostComponent } from './active-post/active-post.component';
import { HomeComponent } from './home/home.component';
import { UnactivePostComponent } from './unactive-post/unactive-post.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'active',
    component: ActivePostComponent
  },
  {
    path: 'unuctive',
    component: UnactivePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
