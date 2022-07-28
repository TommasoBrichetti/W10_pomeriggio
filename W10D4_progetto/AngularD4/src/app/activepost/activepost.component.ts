import { Component, OnInit } from '@angular/core';
import { Postobj } from '../postobj';
import { PostserviceService } from '../postservice.service';

@Component({
  selector: 'app-activepost',
  templateUrl: './activepost.component.html',
  styleUrls: ['./activepost.component.scss']
})
export class ActivepostComponent implements OnInit {

  constructor(private arrayPost:PostserviceService) { }

  activePosts:Postobj[] = []
  ngOnInit(): void {
    this.activePosts = this.arrayPost.getPosts().filter(function(el:any){
      return el.active == true
    })

  }
  deactivePost(id:number){
    this.activePosts[id].active = false
    this.arrayPost.changeActivePropreties(id,this.activePosts[id].active, this.activePosts)
  }

}
