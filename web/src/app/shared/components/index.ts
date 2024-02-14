import { Provider } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastErrorComponent } from './toast-error/toast-error.component';

// import { MatToolbarModule } from '@angular/material/toolbar';

export const COMMON_COMPONENTS: Provider[] = [
  ButtonModule,
  CardModule,
  ToastErrorComponent,

  // MatIconModule,
  ProgressSpinnerModule,
  TableModule,
  ToastModule,
  ToolbarModule,
];
