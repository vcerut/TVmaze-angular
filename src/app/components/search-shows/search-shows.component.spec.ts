import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchShowsComponent } from './search-shows.component';

describe('SearchShowsComponent', () => {
  let component: SearchShowsComponent;
  let fixture: ComponentFixture<SearchShowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchShowsComponent]
    });
    fixture = TestBed.createComponent(SearchShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
