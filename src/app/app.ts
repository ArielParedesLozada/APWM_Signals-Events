import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsExample } from './components/signals-example/signals-example';
import { EventExample } from './components/event-example/event-example';

@Component({
  selector: 'app-root',
  imports: [SignalsExample, EventExample],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('spa');
}
