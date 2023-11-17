import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episodes-button',
  templateUrl: './episodes-button.component.html',
  styleUrls: ['./episodes-button.component.scss'],
})
export class EpisodesButtonComponent implements OnInit {
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
