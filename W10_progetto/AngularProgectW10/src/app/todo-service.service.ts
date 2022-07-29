import { Injectable } from '@angular/core';
import { TodoInterface } from './todo-interface';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor() { }

  arr:TodoInterface[] = []

  getTodo(){
    return this.arr
  }

  insertTodo(obj:TodoInterface){
    this.arr.push(obj)
  }

}
