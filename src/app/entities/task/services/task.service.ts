import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Task } from '../models/Task';

@Injectable({ providedIn: 'root' })
export class TaskService {

  // URL to server (it's a fake server)
  private tasksUrl = 'api/tasks';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get tasks.
   */
  getTasks(): Observable<Task[]> {
    console.log("service:: getTasks");
    return this.http.get<Task[]>(this.tasksUrl)
      .pipe(
        tap(_ => console.log('fetched tasks', _)),
        catchError(this.handleError<Task[]>('getTasks', []))
      );
  }

  /**
   * Get task by id.
   */
  getTask(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url).pipe(
      tap(_ => console.log(`fetched task id=${id}`)),
      catchError(this.handleError<Task>(`getTask id=${id}`))
    );
  }

  /**
   * Search tasks.
   */
  searchTasks(text: string): Observable<Task[]> {
    if (!text.trim()) {
      // if not search term, return empty task array.
      return of([]);
    }

    const result = new EventEmitter<Task[]>();

    // workarround to search by title and description ;)
    this.http.get<Task[]>(`${this.tasksUrl}/?title=${text}`)
      .subscribe(data1 => {       
        this.http.get<Task[]>(`${this.tasksUrl}/?description=${text}`)
          .subscribe(data2 => {
            const noDuplicate = data1.filter(element1 => data2.findIndex(element2=> element1.id == element2.id) == -1 );
            const data = [...noDuplicate, ...data2];
            result.emit(data);
          });

      });
    return result;
  }

  searchTasksByTitle(text: string): Observable<Task[]> {
    if (!text.trim()) {
      // if not search term, return empty task array.
      return of([]);
    }
    return this.http.get<Task[]>(`${this.tasksUrl}/?title=${text}`).pipe(
      tap(data => { }),
      catchError(this.handleError<Task[]>('searchTasks', []))
    );
  }

  /**
   * Add task.
   */
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, this.httpOptions).pipe(
      tap((newTask: Task) => console.log(`added task w/ id=${newTask.id}`)),
      catchError(this.handleError<Task>('addTask'))
    );
  }

  /** 
   * Delete a task.
   **/
  deleteTask(task: Task | number): Observable<Task> {
    const id = typeof task === 'number' ? task : task.id;
    const url = `${this.tasksUrl}/${id}`;

    return this.http.delete<Task>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted task id=${id}`)),
      catchError(this.handleError<Task>('deleteTask'))
    );
  }

  /**
   * Update task.
   */
  updateTask(task: Task): Observable<any> {
    return this.http.put(this.tasksUrl, task, this.httpOptions).pipe(
      tap(_ => console.log(`updated task id=${task.id}`)),
      catchError(this.handleError<any>('updateTask'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
