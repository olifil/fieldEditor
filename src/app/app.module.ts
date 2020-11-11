import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FieldEditorModule } from './fieldEditor/field-editor.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FieldEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
