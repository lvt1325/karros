import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarrosFooterComponent } from './karros-footer.component';

describe('KarrosFooterComponent', () => {
  let component: KarrosFooterComponent;
  let fixture: ComponentFixture<KarrosFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarrosFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarrosFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
