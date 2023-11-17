import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesButtonComponent } from './episodes-button.component';

describe('EpisodesButtonComponent', () => {
  let component: EpisodesButtonComponent;
  let fixture: ComponentFixture<EpisodesButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpisodesButtonComponent]
    });
    fixture = TestBed.createComponent(EpisodesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
