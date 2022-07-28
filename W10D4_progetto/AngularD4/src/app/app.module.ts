import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivepostComponent } from './activepost/activepost.component';
import { UnactivepostComponent } from './unactivepost/unactivepost.component';
import { CardComponent } from './card/card.component';
import { CarddetailComponent } from './carddetail/carddetail.component';
import { NavComponent } from './nav/nav.component';
import { UnderlinedirectiveDirective } from './underlinedirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivepostComponent,
    UnactivepostComponent,
    CardComponent,
    CarddetailComponent,
    NavComponent,
    UnderlinedirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
