import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private arrayPost:PostServiceService) { }

  ngOnInit(): void {
    this.arrayPost.fetchPost()
  }

}
