import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  title: string = '';
  body: string = '';
  creditCard!: Number;

  @Output() addPost: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  submitForm(): void {
    const addPost = {
      title: this.title,
      body: this.body,
      creditCard: this.creditCard,
    }

    this.addPost.emit(addPost);

    this.title = '';
    this.body = '';
    this.creditCard!;
  }


}
