import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carddetail',
  templateUrl: './carddetail.component.html',
  styleUrls: ['./carddetail.component.scss']
})
export class CarddetailComponent implements OnInit {

  @Input() post: any

  constructor() { }

  ngOnInit(): void {
  }
  liked = false
  toggleLike(){
    if (this.post.like == false){
      this.post.like = true
      this.liked = true
    }else{
      this.post.like = false
      this.liked = false
    }
    fetch("http://localhost:3000/posts" + "/" + this.post.id, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        like: this.post.like
      })
    })
  }
}
