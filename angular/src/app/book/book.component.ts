
import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { BookDto, BookService, bookTypeOptions } from '@proxy/books';

@Component({
    selector: 'app-book-abp',
    templateUrl: './book.component.html',
    styles: [`
      nz-date-picker,
      nz-range-picker {
        margin: 0 8px 12px 0;
      }
    `],
    providers: [
        ListService,
        { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }
    ],
})
export class BookComponent implements OnInit {
    book = { items: [], totalCount: 0 } as PagedResultDto<BookDto>;
    form: FormGroup;
    dateFormat = 'yyyy/MM/dd';
    selectedBook = {} as BookDto;
    // add bookTypes as a list of BookType enum members
    bookTypes = bookTypeOptions;
    constructor(
        public readonly list: ListService,
        private bookService: BookService,
        private fb: FormBuilder,
        private confirmation: ConfirmationService) {

        this.form = new FormGroup( // Create a FormGroup instance
            {
                name: new FormControl(),
                type: new FormControl(),
                price: new FormControl(),
                publishDate: new FormControl(),
            });
    }

    ngOnInit() {
        const bookStreamCreator = (query) => this.bookService.getList(query);

        this.list.hookToQuery(bookStreamCreator).subscribe((response) => {
            this.book = response;
        });
    }

    // Creating book  
    isModalOpen = false;
    createBook() {
        this.selectedBook = {} as BookDto;
        this.buildForm();
        this.isModalOpen = true
    }

    editBook(id: string) {
        this.bookService.get(id).subscribe((book) => {
            this.selectedBook = book;
            this.buildForm();
            this.isModalOpen = true;
            console.log(this.selectedBook)
        });
    }

    delete(id: string) {
        this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure').subscribe((status) => {
            if (status === Confirmation.Status.confirm) {
                this.bookService.delete(id).subscribe(() => this.list.get());
            }
        });
    }
    // add buildForm method
    buildForm() {
        this.form = this.fb.group({
            name: [this.selectedBook.name || '', Validators.required],
            type: [this.selectedBook.type || null, Validators.required],
            publishDate: [
                this.selectedBook.publishDate ? new Date(this.selectedBook.publishDate) : null,
                Validators.required,
            ],
            price: [this.selectedBook.price || null, Validators.required],
        });
    }

    // add save method
    save() {
        if (this.form.invalid) {
            return;
        }

        const request = this.selectedBook.id
            ? this.bookService.update(this.selectedBook.id, this.form.value)
            : this.bookService.create(this.form.value);

        request.subscribe(() => {
            this.isModalOpen = false;
            this.form.reset();
            this.list.get();
        });
    }


    // nz modal method
    isConfirmLoading = false;

    showModal(): void {
        this.isModalOpen = true;
    }

    handleOk(): void {
        this.isConfirmLoading = true;
        setTimeout(() => {
            this.isModalOpen = false;
            this.isConfirmLoading = false;
        }, 3000);
    }

    handleCancel(): void {
        this.isModalOpen = false;
    }

}
