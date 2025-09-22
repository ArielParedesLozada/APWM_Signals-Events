import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals-example',
  imports: [],
  templateUrl: './signals-example.html',
  styleUrl: './signals-example.css'
})
export class SignalsExample {
  count = signal(0)

  increment() {
    this.count.update(v => v + 1)
  }
}
