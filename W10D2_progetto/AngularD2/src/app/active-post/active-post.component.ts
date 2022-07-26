import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent implements OnInit {

  constructor() { }

  post:Post[] = []
  active:Post[] = []
  unactive:Post[] = []
  ngOnInit(): void {
    let url='http://localhost:3000/posts'
    fetch(url).then((response) => response.json()).then((res) => {
      this.post = res;
      this.active = this.post.filter(function(el){
        return el.active == true
      })
      this.unactive = this.post.filter(function(el){
        return el.active == true
      })
    });
  }

  change(i:number){
    let modObj = {
      title: this.active[i].title,
      body: this.active[i].body,
      active: this.active[i].active = false,
    }
    let putOption = {
      method: "PUT",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(modObj)
  }
  fetch("http://localhost:3000/posts/" + this.active[i].id, putOption).then(() => {this.active.splice(i,1)})
  }


}
