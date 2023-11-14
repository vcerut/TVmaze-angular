import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/show.model';
import { ActivatedRoute } from '@angular/router';
import { APIcallsService } from 'src/app/services/apicalls.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  showDetails: Show | undefined;
  showId: number = -1;
  paramsSub: any;
  httpSub: any;

  constructor(
    private APIcallsService: APIcallsService,
    private route: ActivatedRoute
  ) {}

  /**
   * elimina tag tipo <p> dal summary
   */
  modifyJson() {
    if (this.showDetails?.show?.summary) {
      this.showDetails.show.summary = this.showDetails.show.summary.replace(/<\/?[A-Za-z]>/gi, "");
    }
  }
  

  ngOnInit() {
    this.paramsSub = this.route.params.subscribe((params) => {
      const id = params['id'];
      this.showId = +id;
      this.httpSub = this.APIcallsService.getShowDetails(this.showId).subscribe(
        (data: any) => {
          console.log('API Response:', data);
          this.showDetails = data ? this.APIcallsService.transformShow(data) : undefined;
          console.log('showDetails:', this.showDetails);
          this.modifyJson();
        },
        (error) => {
          console.error('Error fetching show details:', error);
          // Handle the error (e.g., display an error message)
        }
      );      
    });
  }

  ngOnDestroy() {
    if (this.paramsSub) {
      this.paramsSub.unsubscribe();
    }
    if (this.httpSub) {
      this.httpSub.unsubscribe();
    }
  }
  
}
