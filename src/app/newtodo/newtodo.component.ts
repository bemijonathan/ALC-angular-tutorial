import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.component.html',
  styleUrls: ['./newtodo.component.css']
})
export class NewtodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  first:string = "first"
  last:string = "last"

  onSubmit():void{
    this.first = ''
    this.last = ''
  }

}
