import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-board',
  templateUrl: './form-board.component.html',
  styleUrls: ['./form-board.component.sass']
})
export class FormBoardComponent implements OnInit {
  @ViewChild('f') form!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
