import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIcallsService } from 'src/app/services/apicalls.service';
import { Image } from 'src/app/models/image.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{

  showId: number | undefined = 0;
  image: any;
  showImage: Image[] | undefined;

  constructor(
    private APIcallsService: APIcallsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.showId = id;
  
      this.APIcallsService.getGallery(this.showId).subscribe((data: Image[]) => {
        this.showImage = data;
        console.log('Images: ', this.showImage);
      });
    });
  }
  
}
