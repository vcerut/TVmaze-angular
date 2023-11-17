import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-details-button',
  templateUrl: './show-details-button.component.html',
  styleUrls: ['./show-details-button.component.scss']
})
export class ShowDetailsButtonComponent implements OnInit {
  showId: number | undefined = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      if (isNaN(id) || id <= 0 || id == undefined) {
        console.error('Invalid showId:', params['id']);
        return;
      }
      this.showId = id;
    });
  }
}
