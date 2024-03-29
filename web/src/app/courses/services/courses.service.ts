import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourse } from '../model/course';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) {}

  findAll() {
    return this.httpClient.get<ICourse[]>(this.API).pipe(
      first(),
      tap((courses) => console.log(courses))
    );
  }
}
