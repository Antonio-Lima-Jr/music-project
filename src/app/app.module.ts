import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuitarBoardComponent } from './components/guitar-board/guitar-board.component';

import { ColorToNoteDirective } from './shared/colorToNote.directive';

@NgModule({
  declarations: [
    AppComponent,
    GuitarBoardComponent,
    ColorToNoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
