import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarrosMovieCardComponent } from './karros-movie-card.component';

describe('KarrosMovieCardComponent', () => {
  let component: KarrosMovieCardComponent;
  let fixture: ComponentFixture<KarrosMovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarrosMovieCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarrosMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
