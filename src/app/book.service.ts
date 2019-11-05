import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from './book';
import {Observable} from 'rxjs';
import {Category} from './category';
import {Status} from './status';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  public getList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>( 'http://localhost:8080/api/book' );
  }

  public addBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>( 'http://localhost:8080/api/book' , book);
  }

  public getCategoryList(): Observable<Category[]> {
    return this.httpClient.get<Category[]>( 'http://localhost:8080/api/category' );
  }

  public getStatusList(): Observable<Status[]> {
    return this.httpClient.get<Status[]>( 'http://localhost:8080/api/status' );
  }
}
