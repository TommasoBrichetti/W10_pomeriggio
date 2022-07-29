import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { ArchiveComponent } from './archive/archive.component';
import { CardComponent } from './card/card.component';
import { DonecardComponent } from './donecard/donecard.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ArchiveComponent,
    CardComponent,
    DonecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
