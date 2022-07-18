import { Component } from '@angular/core';

@Component({
  selector: 'timer-watch',
  templateUrl: './timer-watch.component.html',
  styleUrls: ['./timer-watch.component.css'],
})
export class TimerWatchComponent {
  interval: any;
  time: time = { secocnds: 0, minutes: 0, houres: 0 };
  saund: any;

  setTime(): void {
    if (
      this.time.secocnds === 15 &&
      this.time.minutes === 0 &&
      this.time.houres === 0
    )
      this.audio();
    if (
      this.time.secocnds === 1 &&
      this.time.minutes === 0 &&
      this.time.houres === 0
    ) {
      this.saund.pause();
      return clearInterval(this.interval);
    }

    if (this.time.secocnds === 0 && this.time.minutes > 0) {
      this.time.secocnds = 60;
      this.time.minutes--;
    }
    if (this.time.minutes === 0 && this.time.houres > 0) {
      this.time.minutes = 60;
      this.time.houres--;
    }
    if (this.time.houres === 0) {
      this.time.houres = 0;
    }
  }
  handleInterval(command: string): void {
    if (command === 'stop') {
      clearInterval(this.interval);
      this.saund.pause();
    }
  }
  reset(): void {
    this.time.secocnds = 0;
    this.time.minutes = 0;
    this.time.houres = 0;
    this.handleInterval('stop');
  }
  start() {
    if (
      this.time.secocnds === 0 &&
      this.time.minutes === 0 &&
      this.time.houres === 0
    )
      return clearInterval(this.interval);

    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.setTime();
      this.time.secocnds--;
    }, 1000);
  }
  audio() {
    this.saund = new Audio(
      ' https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3'
    );
    this.saund.load();
    this.saund.play();
  }
}

interface time {
  secocnds: number;
  minutes: number;
  houres: number;
}
