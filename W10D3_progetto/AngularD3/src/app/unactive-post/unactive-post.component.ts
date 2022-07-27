import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-unactive-post',
  templateUrl: './unactive-post.component.html',
  styleUrls: ['./unactive-post.component.scss']
})
export class UnactivePostComponent implements OnInit {

  constructor(private arrayPost:PostServiceService) { }

  unactivePosts = []
  ngOnInit(): void {
    this.unactivePosts = this.arrayPost.getPosts().filter(function(el:any){
      return el.active == false
    })

  }

}
