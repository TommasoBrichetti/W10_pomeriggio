import { Component, OnInit } from '@angular/core';
import { TodoInterface } from '../todo-interface';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private todoSrv:TodoServiceService) { }

  todo:TodoInterface[] =[]
  ngOnInit(): void {
    this.todo = this.todoSrv.getTodo().filter(function (el){return el.completed == false})
  }

  add(){
    let input = document.querySelector('input')?.value
    let obj:TodoInterface = {
      id: this.todoSrv.getTodo().length+1,
      title: input,
      completed: false
    }
    this.todoSrv.insertTodo(obj)
    console.log(this.todoSrv.getTodo());
    this.todo = this.todoSrv.getTodo().filter(function (el){return el.completed == false})
    console.log(this.todo);
  }

  remove(index:number){
    this.todo.splice(index,1)
  }

}
