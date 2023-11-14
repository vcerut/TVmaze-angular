import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIcallsService } from 'src/app/services/apicalls.service';
import { ShowEpisode } from 'src/app/models/show-episode.model';
@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  showEpisodes: ShowEpisode[] | undefined;
  showId: number | undefined = 0;
episode: any;

  constructor(
    private APIcallsService: APIcallsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      const id = +params['id'];
      console.log('PARAMS DOPO ASSEGNAZIONE ID', params);
      if (isNaN(id) || id <= 0 || id == undefined) {
        console.error('Invalid showId:', params['id']);
        return;
      }

      this.showId = id;


      this.APIcallsService.getEpisodesList(this.showId).subscribe(
        (data: any[]) => {
          this.showEpisodes = data.map((data) =>
            this.APIcallsService.transformEpisode(data)
          );
          this.modifyJson();
          console.log('Episodes: ', this.showEpisodes);
        },
        (error) => {
          console.error('Error fetching episodes:', error);
        }
      );
    });
  }

  modifyJson(): void {
    if(this.showEpisodes){
      this.showEpisodes.forEach((episode) => {
        if(episode.summary) {
          episode.summary = episode.summary.replace(/<\/?[A-Za-z]>/gi, "");
        }
      })
    }
  }

}

