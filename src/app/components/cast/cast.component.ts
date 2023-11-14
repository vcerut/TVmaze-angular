import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIcallsService } from 'src/app/services/apicalls.service';
import { Cast } from 'src/app/models/cast.model';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss'],
})
export class CastComponent implements OnInit {
  showCast: Cast[] | undefined;
  showId: number | undefined = 0;
  cast: any;

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

      this.APIcallsService.getCast(this.showId).subscribe((data: any[]) => {
        this.showCast = data.map((data) =>
        this.APIcallsService.transformCast(data));
        console.log('cast: ', this.showCast)
      });
    });
  }
}
