import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarrosHeaderComponent } from './karros-header.component';

describe('KarrosHeaderComponent', () => {
  let component: KarrosHeaderComponent;
  let fixture: ComponentFixture<KarrosHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarrosHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarrosHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
