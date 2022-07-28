import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivepostComponent } from './activepost/activepost.component';
import { CarddetailComponent } from './carddetail/carddetail.component';
import { HomeComponent } from './home/home.component';
import { UnactivepostComponent } from './unactivepost/unactivepost.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'active',
    component: ActivepostComponent,
    children: [
      {
        path: 'id',
        component: CarddetailComponent
      }
    ]
  },
  {
    path: 'unuctive',
    component: UnactivepostComponent,
    children: [
      {
        path: 'id',
        component: CarddetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
