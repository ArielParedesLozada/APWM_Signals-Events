import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-event-example',
  imports: [],
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
  onMouseMove(event: MouseEvent): void {
    this.clientX = event.clientX;
    this.clientY = event.clientY;
    this.screenX = event.screenX;
    this.screenY = event.screenY;
    this.pageX = event.pageX;
    this.pageY = event.pageY;
    this.offsetX = event.offsetX;
    this.offsetY = event.offsetY;
  }

  @HostListener('window:mousemove', ['$event'])
  onWindowMouseMove(event: MouseEvent): void {
  }
}
