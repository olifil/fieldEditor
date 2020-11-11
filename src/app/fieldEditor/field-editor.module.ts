import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldEditorComponent } from './_components/field-editor/field-editor.component';
import { HeaderComponent } from './_components/field-editor/header/header.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    FieldEditorComponent,
    HeaderComponent,
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
