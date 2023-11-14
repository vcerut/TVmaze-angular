import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIcallsService } from 'src/app/services/apicalls.service';
import { Show } from 'src/app/models/show.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  query: string = '';
  shows: Show[] = [];
  queryModified: string | null = '';

  constructor(private APIcallsService: APIcallsService) {}

  search(query: string) {
    this.APIcallsService.searchShows(this.query).subscribe((data) => {
      this.shows = data as Show[];
    });
  }

  modifyQuery() {
    this.queryModified = this.query.toLowerCase();
    this.queryModified = this.queryModified.replace(/ /g, '-');
    this.search(this.queryModified);
  }
  
}
