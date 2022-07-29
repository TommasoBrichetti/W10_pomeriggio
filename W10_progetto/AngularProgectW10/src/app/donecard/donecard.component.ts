import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-donecard',
  templateUrl: './donecard.component.html',
  styleUrls: ['./donecard.component.scss']
})
export class DonecardComponent implements OnInit {

  @Input() info:any
  @Input() index:any

  @Output() customEvent2=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  undone(){
    this.info.completed = false
    console.log(this.info);
    this.customEvent2.emit(this.index)
  }

}
