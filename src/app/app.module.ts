import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
 
import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
 
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,      //every apps needs to run in a browser
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroService, MessageService ],
  bootstrap: [AppComponent]   // root component and angular inserts into index.html
})
export class AppModule { }
