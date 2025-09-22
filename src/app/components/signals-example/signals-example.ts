import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals-example',
  imports: [],
  templateUrl: './signals-example.html',
  styleUrl: './signals-example.css'
})
export class SignalsExample {
  count = signal(0)

  computada = computed(() => {
    const value = this.count()
    if (value === 0) return '#6c757d'; // Gris
    if (value > 0) {
      const intensity = Math.min(255, 100 + value * 20);
      return `rgb(0, ${intensity}, 0)`;
    }
    const intensity = Math.min(255, 100 + Math.abs(value) * 20);
    return `rgb(${intensity}, 0, 0)`;
  });

  // Signal computada para el nombre del color
  colorName = computed(() => {
    const value = this.count();
    if (value === 0) return 'Neutro (Gris)';
    if (value > 0) return `Verde (Positivo: +${value})`;
    return `Rojo (Negativo: ${value})`;
  })
  increment() {
    this.count.update(v => v + 1)
  }
}
