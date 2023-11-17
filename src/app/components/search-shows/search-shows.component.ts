import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIcallsService } from 'src/app/services/apicalls.service';
import { Show } from 'src/app/models/show.model';

@Component({
  selector: 'app-search-shows',
  templateUrl: './search-shows.component.html',
  styleUrls: ['./search-shows.component.scss']
})
export class SearchShowsComponent {
  query: string = '';
  shows: Show[] = [];
  queryModified: string | null = '';

  constructor(private APIcallsService: APIcallsService) {}

  searchShow(query: string) {
    this.APIcallsService.searchShows(this.query).subscribe((data) => {
      this.shows = data as Show[];
    });
  }

  modifyQuery() {
    this.queryModified = this.query.toLowerCase();
    this.queryModified = this.queryModified.replace(/ /g, '-');
    this.searchShow(this.queryModified);
  }
  
}
