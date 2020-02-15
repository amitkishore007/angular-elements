import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentManagementModule } from 'projects/document-management/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DocumentManagementModule
  ],
  providers: [],
  bootstrap: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 
  
  ngDoBootstrap() {

  }
}
