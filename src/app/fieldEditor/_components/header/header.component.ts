import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { EditorModeService } from '../../_services/editor-mode.service';

@Component({
  selector: 'field-editor-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

    // The field editor title
    @Input() 
        get title(): string { return this._title; }
        set title(title: string) {
            this._title = (title && title.trim()) || '<no title set>';

            if (typeof this.helpTitle === "undefined" || this.helpTitle === null) this.helpTitle = this._title;
        }

    @Input()
        get helpTitle(): string { return this._helpTitle; }
        set helpTitle(title: string) {
            this._helpTitle = (title && title.trim()) || '<no helpTitle set>';
        }
    
    @Input()
        get helpContent(): string { return this._helpContent; }
        set helpContent(content: string) {
            this._helpContent = content;
        }

    get editorMode(): boolean { return this._editorMode; }
    set editorMode(mode: boolean) {
        this._editorMode = mode;
    }

    private _title: string;
    private _editorMode: boolean;

    private _helpTitle: string;
    private _helpContent: string;

    constructor(
        private modeService: EditorModeService,
    ) {
        this.modeService.setMode(false);
    }

    ngOnInit(): void {
        this.modeService.mode.subscribe(
            (mode: boolean) => this.editorMode = mode
        )
    }

    onUpdateMode(e: Event) {
        this.modeService.setMode(true);
    }
}
