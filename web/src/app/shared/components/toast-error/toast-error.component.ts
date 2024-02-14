import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast-error',
  standalone: true,
  imports: [],
  templateUrl: './toast-error.component.html',
  styleUrl: './toast-error.component.scss',
})
export class ToastErrorComponent implements OnInit {
  constructor() {}

  showConsole(message: string) {
    console.log('message>>>>', message);
  }

  ngOnInit(): void {}
}
