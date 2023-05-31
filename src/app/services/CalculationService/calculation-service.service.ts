import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationServiceService {

  collatzSequence(n: number) {
    let sequence = [n];

    while (n !== 1) {
      if (n % 2 === 0) {
        // Число чётное
        n = n / 2;
      } else {
        // Число нечётное
        n = 3 * n + 1;
      }
      sequence.push(n);
    }

    return sequence;
  }

  constructor() { }
}
