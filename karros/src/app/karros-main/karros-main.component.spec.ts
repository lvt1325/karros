import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarrosMainComponent } from './karros-main.component';

describe('KarrosMainComponent', () => {
  let component: KarrosMainComponent;
  let fixture: ComponentFixture<KarrosMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarrosMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarrosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
