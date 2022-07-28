import { Injectable } from '@angular/core';
import { Postobj } from './postobj';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor() { }

  posts = []
  fetchPost(){
    let url='http://localhost:3000/posts'
    fetch(url).then((response) => response.json()).then((res) => {
      this.posts = res;
    })
  }

  getPosts():any{
    return this.posts;
  }

  changeActivePropreties(id:number,mod:boolean, arr:any){
    fetch("http://localhost:3000/posts" + "/" + id, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        active: mod
      })
    }).then(arr.splice(id,1))
  }
}
