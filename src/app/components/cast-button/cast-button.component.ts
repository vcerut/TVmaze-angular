import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cast-button',
  templateUrl: './cast-button.component.html',
  styleUrls: ['./cast-button.component.scss']
})
export class CastButtonComponent implements OnInit{
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
