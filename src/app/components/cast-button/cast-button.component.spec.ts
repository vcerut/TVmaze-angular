import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastButtonComponent } from './cast-button.component';

describe('CastButtonComponent', () => {
  let component: CastButtonComponent;
  let fixture: ComponentFixture<CastButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CastButtonComponent]
    });
    fixture = TestBed.createComponent(CastButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
