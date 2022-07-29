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
    let x = this
    let promise:Promise <any> = new Promise(function(su,er){
    setTimeout(() => {
      x.arr.push(obj)
      su(null)
    }, 2000);

  })
  return promise
  }



}
