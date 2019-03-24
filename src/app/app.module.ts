import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageEditorComponent } from './image-editor/image-editor.component';
import {NgxImageEditorModule} from "ngx-image-editor";
@NgModule({
  declarations: [
    AppComponent,
    ImageEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxImageEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
