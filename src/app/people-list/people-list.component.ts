import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, PersonComponent],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent {
  people
  // query: string

  constructor() {
    // this.query = ''

    this.people = [
      {
        name: "bobby",
        age: 42,
        instructor: true,
        added_on: new Date().getTime()
      },
      {
        name: "sarah",
        age: 42,
        instructor: true,
        added_on: new Date().getTime()
      },
      {
        name: "steve",
        age: 42,
        instructor: true,
        added_on: new Date().getTime()
      },
      {
        name: "jane",
        age: 42,
        instructor: true,
        added_on: new Date().getTime()
      }
    ]
  }

  onPersonDelete(event:{person_name:string}) {
    let del_person_name = event.person_name
    this.people = this.people.filter((p:{name:string})=> p.name != del_person_name)
    console.log(`person ${event.person_name} just got deleted!`)
  }
}
