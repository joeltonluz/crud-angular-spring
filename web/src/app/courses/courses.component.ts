import { Component, OnInit } from '@angular/core';
import { ICourse } from './model/course';
import { SHARED } from '../shared';
import { CoursesService } from './services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, SHARED],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  courses$: Observable<ICourse[]>;
  displayedColumns: string[] = ['name', 'category'];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {
    this.courses$ = this.coursesService.findAll().pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        this.onError(error.message);
        return of([]);
      })
    );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  ngOnInit(): void {}

  //dataSource = this.courses;
}
