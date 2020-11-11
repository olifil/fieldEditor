import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'field-editor',
  templateUrl: './field-editor.component.html',
  styleUrls: ['./field-editor.component.scss']
})
export class FieldEditorComponent implements OnInit {

    @Input() title: string = 'Property title';

    constructor() { }

    ngOnInit(): void {
    }

  onSubmit(e: Event) {
    console.log('test');
  }
}
