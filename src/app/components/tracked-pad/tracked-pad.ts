import { Component, EventEmitter, Output } from '@angular/core';
import { IMouseCoords } from '../../interfaces/imouse-coords';

@Component({
  selector: 'app-tracked-pad',
  standalone: true,
  templateUrl: './tracked-pad.html',
  styleUrl: './tracked-pad.css'
})
export class TrackedPad {
  @Output() move = new EventEmitter<IMouseCoords>();
  @Output() enter = new EventEmitter<void>();
  @Output() leave = new EventEmitter<void>();

  onMouseMove(event: MouseEvent) {
    this.move.emit({
      clientX: event.clientX, clientY: event.clientY,
      screenX: event.screenX, screenY: event.screenY,
      pageX: event.pageX, pageY: event.pageY,
      offsetX: event.offsetX, offsetY: event.offsetY
    });
  }
  onMouseEnter() { this.enter.emit(); }
  onMouseLeave() { this.leave.emit(); }
}
