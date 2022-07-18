import { Component } from '@angular/core';

@Component({
  selector: 'angular-clock',
  templateUrl: './angular-clock.component.html',
  styleUrls: ['./angular-clock.component.css'],
})
export class AngularClockComponent {
  interval: any;
  time: time = { milliSeconds: 0, secocnds: 0, minutes: 0, houres: 0 };
  ifStop: boolean;
  constructor() {
    this.ifStop = false;
    this.interval = setInterval(() => {
      this.time.milliSeconds++;
      this.setTime();
    }, 0);
  }
  setTime(): void {
    if (this.time.milliSeconds === 250) {
      this.time.milliSeconds = 0;
      this.time.secocnds++;
    }
    if (this.time.secocnds === 60) {
      this.time.secocnds = 0;
      this.time.minutes++;
    }
    if (this.time.minutes === 60) {
      this.time.minutes = 0;
      this.time.houres++;
    }
  }
  handleInterval(command: string): void {
    if (command === 'stop' && !this.ifStop) {
      clearInterval(this.interval);
      this.ifStop = true;
    } else {
      this.interval = setInterval(() => {
        this.time.milliSeconds++;
        this.setTime();
      }, 0);
      this.ifStop = false;
    }
  }
  reset(): void {
    this.ifStop = false;
    this.handleInterval('stop');
    this.time.milliSeconds = 0;
    this.time.secocnds = 0;
    this.time.minutes = 0;
    this.time.houres = 0;
    this.ifStop = false;
  }
  start() {
    this.ifStop = false;
    this.handleInterval('stop');

    this.time.milliSeconds = 0;
    this.time.secocnds = 0;
    this.time.minutes = 0;
    this.time.houres = 0;

    this.interval = setInterval(() => {
      this.time.milliSeconds++;
      this.setTime();
    }, 0);
    this.ifStop = false;
  }
}
interface time {
  milliSeconds: number;
  secocnds: number;
  minutes: number;
  houres: number;
}
