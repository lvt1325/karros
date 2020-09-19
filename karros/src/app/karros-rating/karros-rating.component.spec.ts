import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarrosRatingComponent } from './karros-rating.component';

describe('KarrosRatingComponent', () => {
  let component: KarrosRatingComponent;
  let fixture: ComponentFixture<KarrosRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarrosRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarrosRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
