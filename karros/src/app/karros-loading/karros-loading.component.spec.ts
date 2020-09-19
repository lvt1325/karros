import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarrosLoadingComponent } from './karros-loading.component';

describe('KarrosLoadingComponent', () => {
  let component: KarrosLoadingComponent;
  let fixture: ComponentFixture<KarrosLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarrosLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarrosLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
