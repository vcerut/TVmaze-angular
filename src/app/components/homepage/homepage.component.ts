import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIcallsService } from 'src/app/services/apicalls.service';
import { Show } from 'src/app/show';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  query: string = '';
  shows: any[] = [];

  constructor(private APIcallsService: APIcallsService) {}

  search() {
    this.APIcallsService.searchShows(this.query).subscribe((data: any) => {
      this.shows = [data as Show]; // metti l'oggetto ShowData in un array
    });
  }
}
