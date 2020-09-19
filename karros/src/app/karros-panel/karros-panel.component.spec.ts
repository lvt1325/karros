import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarrosPanelComponent } from './karros-panel.component';

describe('KarrosPanelComponent', () => {
  let component: KarrosPanelComponent;
  let fixture: ComponentFixture<KarrosPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarrosPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarrosPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
