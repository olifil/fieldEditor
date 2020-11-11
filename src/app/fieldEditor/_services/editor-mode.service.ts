import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorModeService {

  private modeSubject: BehaviorSubject<boolean>;
  public mode: Observable<boolean>;

  constructor() {
    this.modeSubject = new BehaviorSubject<boolean>(null);
    this.mode = this.modeSubject.asObservable();
  }

  public setMode(mode: boolean) {
    this.modeSubject.next(mode);
  }
}
