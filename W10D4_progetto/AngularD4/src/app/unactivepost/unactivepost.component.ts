import { Component, OnInit } from '@angular/core';
import { Postobj } from '../postobj';
import { PostserviceService } from '../postservice.service';

@Component({
  selector: 'app-unactivepost',
  templateUrl: './unactivepost.component.html',
  styleUrls: ['./unactivepost.component.scss']
})
export class UnactivepostComponent implements OnInit {

  constructor(private arrayPost:PostserviceService) { }

  unactivePosts:Postobj[] = []
  ngOnInit(): void {
    this.unactivePosts = this.arrayPost.getPosts().filter(function(el:any){
      return el.active == false
    })

  }

  activePost(id:number){
    this.unactivePosts[id].active = true
    this.arrayPost.changeActivePropreties(id,this.unactivePosts[id].active, this.unactivePosts)
  }

}
