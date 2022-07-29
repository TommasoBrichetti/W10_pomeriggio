import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

   @Input() info: any
   @Input() index: any

   @Output() customEvent=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  done(){
    this.info.completed = true
    console.log(this.info);
    this.customEvent.emit(this.index)
  }

}
