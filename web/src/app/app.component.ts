import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SHARED } from './shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // BrowserModule,
    // BrowserAnimationsModule,
    CommonModule,
    RouterOutlet,
    SHARED,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'web';
}
