import {Injectable} from '@angular/core';
import {LogService} from './log.service';

@Injectable()

export class CounterService {
  counter = 0;

  constructor(private logService: LogService) {
  }

  increment() {
    this.logService.log('Increment');
    this.counter++;
  }

  decrement() {
    this.logService.log('Decrement');
    this.counter--;
  }
}
