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

  input = ''
  add(){
    let obj:TodoInterface = {
      id: this.todoSrv.getTodo().length+1,
      title: this.input,
      completed: false
    }
    this.todoSrv.insertTodo(obj).then(()=>{
      this.todo = this.todoSrv.getTodo().filter(function (el){return el.completed == false})})


  }

  remove(index:number){
     this.todo.splice(index,1)
     console.log(this.todoSrv.getTodo());

  }

}
