import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuitarBoardComponent } from './components/guitar-board/guitar-board.component';

import { ColorToNoteDirective } from './shared/colorToNote.directive';
import { PianoBoardComponent } from './components/piano-board/piano-board.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorToNoteDirective,
    GuitarBoardComponent,
    PianoBoardComponent
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
