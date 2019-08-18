import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewtodoComponent } from './newtodo/newtodo.component';
import { FormsModule } from '@angular/forms';
import { Nav } from './nav/nav.component';
import { EventService } from './shared/events.service';
import { eventContainer } from './eventList/event.component';

@NgModule({
  declarations: [
    AppComponent,
    NewtodoComponent,
    Nav,
    eventContainer
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
