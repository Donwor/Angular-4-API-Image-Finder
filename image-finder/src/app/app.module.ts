
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageService } from './shared/image.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import {MdInputModule, MdCardModule, MdButtonModule, MdProgressBarModule} from '@angular/material';
import { MasonryModule } from 'angular2-masonry';
import {  BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MdInputModule,
     MdCardModule,
    MdButtonModule,
    MdProgressBarModule,
    MasonryModule,
    BrowserAnimationsModule

  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
