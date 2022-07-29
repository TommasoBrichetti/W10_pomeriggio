import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() post: any
  @Input() index: any


  @Output() customEvent=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  editPost(){
    this.customEvent.emit(this.post.id)
  }

  findau(){
    if (this.post.active == true){
      return 'active'
    }
    else{
      return 'unactive'
    }
  }
}
