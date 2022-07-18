import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularClockComponent } from './angular-clock/angular-clock.component';
import { TimerWatchComponent } from './timer-watch/timer-watch.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AngularClockComponent, TimerWatchComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
