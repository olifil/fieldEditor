import { Component, Input, OnInit } from '@angular/core';
import { EditorModeService } from '../../_services/editor-mode.service';

@Component({
  selector: 'field-editor-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  get editorMode():boolean { return this._editorMode; }
  set editorMode(mode: boolean) {
    this._editorMode = mode;
  }

  private _editorMode: boolean = false;

  constructor(
    private modeService: EditorModeService,
  ) { }

  ngOnInit(): void {
    this.modeService.mode.subscribe(
      (mode: boolean) => this.editorMode = mode
    )
  }

  onUndo(e: Event) {
    this.modeService.setMode(false);
  }
}
