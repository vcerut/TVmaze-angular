import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIcallsService } from 'src/app/services/apicalls.service';
import { Cast } from 'src/app/models/cast.model';

@Component({
  selector: 'app-guest-cast',
  templateUrl: './guest-cast.component.html',
  styleUrls: ['./guest-cast.component.scss']
})
export class GuestCastComponent implements OnInit{

  showGuestCast: Cast[] | undefined;
  showId: number | undefined = 0;
  guestCast: any;

  constructor(
    private APIcallsService: APIcallsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];

      this.showId = id;

      this.APIcallsService.getGuestCast(this.showId).subscribe((data: any[]) => {
        this.showGuestCast = data.map((data) => 
          this.APIcallsService.transformCast(data));
      })
    })
  }

}
