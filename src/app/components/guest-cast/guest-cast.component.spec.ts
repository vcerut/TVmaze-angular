import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestCastComponent } from './guest-cast.component';

describe('GuestCastComponent', () => {
  let component: GuestCastComponent;
  let fixture: ComponentFixture<GuestCastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestCastComponent]
    });
    fixture = TestBed.createComponent(GuestCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
