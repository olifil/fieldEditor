import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FieldEditorComponent } from './_components/field-editor.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';


@NgModule({
  declarations: [
    FieldEditorComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports: [
    FieldEditorComponent,
  ]
})
export class FieldEditorModule { }
