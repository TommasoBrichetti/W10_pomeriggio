import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './archive/archive.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path:'',
    component: TodoComponent
  },
  {
    path:'archive',
    component: ArchiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
