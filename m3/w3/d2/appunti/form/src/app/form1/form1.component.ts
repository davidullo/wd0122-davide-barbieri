import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.sass'],
})
export class Form1Component implements OnInit {
  @ViewChild('f') form!: NgForm;

  constructor() {}

  email: string = 'test@test.it';
  password: string = '';
  city: string = '';

  ngOnInit(): void {}

  submit(form: any) {
    console.log(form.value);
  }
}
