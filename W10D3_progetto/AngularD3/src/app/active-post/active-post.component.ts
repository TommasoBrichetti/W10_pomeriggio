import { Component, Input, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent implements OnInit {

  constructor(private arrayPost:PostServiceService) { }

  activePosts = []
  ngOnInit(): void {
    this.activePosts = this.arrayPost.getPosts().filter(function(el:any){
      return el.active == true
    })

  }

}
