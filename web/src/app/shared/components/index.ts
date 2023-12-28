import { Provider } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

export const COMMON_COMPONENTS: Provider[] = [
  MatCardModule,
  MatTableModule,
  MatToolbarModule,
];
