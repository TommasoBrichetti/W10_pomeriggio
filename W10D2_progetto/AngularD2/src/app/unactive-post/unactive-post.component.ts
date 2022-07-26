import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-unactive-post',
  templateUrl: './unactive-post.component.html',
  styleUrls: ['./unactive-post.component.scss']
})
export class UnactivePostComponent implements OnInit {

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
        return el.active == false
      })
    });
  }

  change(i:number){
    let modObj = {
      title: this.unactive[i].title,
      body: this.unactive[i].body,
      active: this.unactive[i].active = true,
    }
    let putOption = {
      method: "PUT",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(modObj)
  }
  fetch("http://localhost:3000/posts/" + this.unactive[i].id, putOption).then(() => {this.unactive.splice(i,1)})
  }

}
