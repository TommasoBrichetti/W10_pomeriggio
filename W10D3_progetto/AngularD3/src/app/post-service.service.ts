import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

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

}
