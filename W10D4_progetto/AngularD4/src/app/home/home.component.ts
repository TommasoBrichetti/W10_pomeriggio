import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../postservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private arrayPost:PostserviceService) { }

  ngOnInit(): void {
    this.arrayPost.fetchPost()
  }

}
