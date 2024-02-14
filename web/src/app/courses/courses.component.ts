import { Component, OnInit } from '@angular/core';
import { ICourse } from './model/course';
import { SHARED } from '../shared';
import { CoursesService } from './services/courses.service';
import { Observable, catchError, map, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ToastErrorComponent } from '../shared/components/toast-error/toast-error.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, SHARED, ToastErrorComponent],
  providers: [MessageService],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  courses$: Observable<ICourse[]>;
  displayedColumns: string[] = ['name', 'category'];

  constructor(
    private coursesService: CoursesService,
    private messageService: MessageService
  ) {
    this.courses$ = this.coursesService.findAll().pipe(
      map((data) => this.onSuccess(data)),
      catchError((error: HttpErrorResponse) => {
        this.onError(error.message);
        return of([]);
      })
    );
  }

  onSuccess(data: any) {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso!',
      detail: 'Sucesso!',
    });
    return data;
  }

  onError(errorMessage: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: errorMessage,
      life: 5000,
      closable: true,
    });
  }

  ngOnInit(): void {}
}
