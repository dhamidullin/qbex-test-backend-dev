import { Injectable, Input, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  /**
   * временно не используется
   */

  constructor() { }

  @Output() reloadUserEvent: EventEmitter<any> = new EventEmitter();
  reloadUser() {
    this.reloadUserEvent.emit();
  }
}
