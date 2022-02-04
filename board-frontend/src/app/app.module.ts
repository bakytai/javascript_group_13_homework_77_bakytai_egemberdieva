import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContentComponent } from './content/content.component';
import { FileInputComponent } from './ui/file-input/file-input.component';
import { FormBoardComponent } from './form-board/form-board.component';
import { NamePipe } from './pipes/name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FileInputComponent,
    FormBoardComponent,
    NamePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
