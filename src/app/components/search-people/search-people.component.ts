import { Component } from '@angular/core';
import { APIcallsService } from 'src/app/services/apicalls.service';
import { Person } from 'src/app/models/query-person.model';

@Component({
  selector: 'app-search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.scss']
})
export class SearchPeopleComponent {
  query: string = '';
  people: Person[] = [];

  constructor(private APIcallsService: APIcallsService) {}

  searchPeople(query: string) {
    this.APIcallsService.searchPeople(this.query).subscribe((data) => {
      this.people = data as Person[];
    });
  }
}
