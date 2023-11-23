import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from '../people-list/people-list.component';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {

  @Input() person:any
  @Output() delete = new EventEmitter()
  constructor() {
    // this.person = {
    //   name: "bobby",
    //   age: 42,
    //   instructor: true,
    //   added_on: new Date().getTime()
    // }
  }

  onDelete(event:any,person_name:string) {
      event["person_name"] = person_name
      // console.log(event)
      this.delete.emit(event)
    }
}
