import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'field-editor',
  templateUrl: './field-editor.component.html',
  styleUrls: ['./field-editor.component.scss']
})
export class FieldEditorComponent implements OnInit {

    @Input() title: string = 'Property title';

    public editorMode: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    onUpdateEditorMode(e: boolean) {
        this.editorMode = e;
    }

  onSubmit(e: Event) {
    console.log('test');
  }

  onUndo(e: Event) {
    this.editorMode = !this.editorMode;
  }
}
