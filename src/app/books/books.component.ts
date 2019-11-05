import {Component, ElementRef, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {Category} from '../category';
import {Status} from '../status';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  bookList: Book[];
  categoryList: Category[];
  statusList: Status[];

  bookForm = new FormGroup({
    title: new FormControl(''),
    authors: new FormControl(''),
    categoryId: new FormControl(''),
    statusId: new FormControl('')
  });

  constructor(private bookService: BookService) { }

  ngOnInit() {

    this.getBookList();

    this.bookService.getCategoryList().subscribe( result => {
      this.categoryList = result;
    } );

    this.bookService.getStatusList().subscribe( result => {
      this.statusList = result;
    } );
  }

  private getBookList() {
    this.bookService.getList().subscribe( result => {
      this.bookList = result;
    } );
  }

  saveBook(closeButton: HTMLInputElement) {
    const { title, authors, categoryId, statusId } = this.bookForm.value;

    const book = {
      title,
      authors,
      category: {
        id: categoryId
      },
      status: {
        id: statusId
      }
    };

    this.bookService.addBook(book).subscribe( result => {
      console.log('Thanh cong');
      this.getBookList();
      closeButton.click();
      this.bookForm.reset();
    });
  }

}
