import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counting: number = 0;

  incrementing() {
    this.counting++
  }
  decrementing() {
    this.counting--
  }
}
