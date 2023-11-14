import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIcallsService } from 'src/app/services/apicalls.service';
import { ShowEpisode } from 'src/app/show-episode.model';
import { Show } from 'src/app/show.model';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  showEpisodes: ShowEpisode[] | undefined;
  showId: number | undefined = 0;

  constructor(
    private APIcallsService: APIcallsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log('PARAMS PRIMA ASSEGNAZIONE ID', params);
      console.log('ID PRIMA ASSEGNAZIONE ID', this.showId);
      const id = +params['id'];
      console.log('PARAMS DOPO ASSEGNAZIONE ID', params);
      if (isNaN(id) || id <= 0 || id == undefined) {
        console.error('Invalid showId:', params['id']);
        return;
      }

      this.showId = id;
      console.log('ID DOPO ASSEGNAZIONE ID', this.showId);

      this.APIcallsService.getEpisodesList(this.showId).subscribe(
        (data: any[]) => {
          this.showEpisodes = data.map((data) =>
            this.APIcallsService.transformEpisode(data)
          );
          console.log('Episodes: ', this.showEpisodes);
        },
        (error) => {
          console.error('Error fetching episodes:', error);
        }
      );
    });
  }
}
