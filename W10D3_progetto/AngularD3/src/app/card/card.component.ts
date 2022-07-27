import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() post: any

  constructor() { }
  typeNews = false
  ngOnInit(): void {
    if(this.post.type == 'news'){
      this.typeNews = true
    }
  }


}
