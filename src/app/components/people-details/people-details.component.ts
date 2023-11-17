import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { ActivatedRoute } from '@angular/router';
import { APIcallsService } from 'src/app/services/apicalls.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss'],
})
export class PeopleDetailsComponent implements OnInit {
  personDetails: Person | undefined;
  actorId: number = -1;
  paramsSub: any;
  httpSub: any;

  constructor(
    private APIcallsService: APIcallsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.paramsSub = this.route.params.subscribe((params) => {
      const id = params['id'];
      this.actorId = +id;
  
      this.httpSub = this.APIcallsService.getActorDetails(this.actorId)
        .subscribe((data: any) => {
          console.log(data);
          this.personDetails = data ? this.APIcallsService.transformActor(data) : undefined;
        });
    });
  }
  
}
