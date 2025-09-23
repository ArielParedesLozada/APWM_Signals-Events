import { Component, HostListener } from '@angular/core';
import { IMouseCoords } from '../../interfaces/imouse-coords';
import { TrackedPad } from '../tracked-pad/tracked-pad';

@Component({
  selector: 'app-event-example',
  imports: [TrackedPad],
  templateUrl: './event-example.html',
  styleUrl: './event-example.css'
})
export class EventExample {
  // Coordenadas del mouse
  clientX: number = 0;
  clientY: number = 0;
  screenX: number = 0;
  screenY: number = 0;
  pageX: number = 0;
  pageY: number = 0;
  offsetX: number = 0;
  offsetY: number = 0;

  timesEntered = 0;
  timesLeft = 0;

  lastKey = '';

  onPadMove(coords: IMouseCoords) {
    this.clientX = coords.clientX;
    this.clientY = coords.clientY;
    this.screenX = coords.screenX;
    this.screenY = coords.screenY;
    this.pageX = coords.pageX;
    this.pageY = coords.pageY;
    this.offsetX = coords.offsetX;
    this.offsetY = coords.offsetY;
  }
  onPadEnter() { this.timesEntered++; }
  onPadLeave() { this.timesLeft++; }

  @HostListener('window:keydown', ['$event'])
  onWindowKeyDown(event: KeyboardEvent) {
    this.lastKey = event.key;
  }
}
