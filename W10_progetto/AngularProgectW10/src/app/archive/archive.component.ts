import { Component, OnInit } from '@angular/core';
import { TodoInterface } from '../todo-interface';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor(private todoSrv:TodoServiceService) {}

  done:TodoInterface[] =[]

  ngOnInit(): void {
    this.done = this.todoSrv.getTodo().filter(function (el){return el.completed == true})
  }

  remove(index:number){
    this.done.splice(index,1)
  }

  //todo aggiungere funzione delete forse splice su array originale

}
