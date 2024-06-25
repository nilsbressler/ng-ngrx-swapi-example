import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDetailComponent } from './planet-detail.component';

describe('PlanetDetailComponent', () => {
  let component: PlanetDetailComponent;
  let fixture: ComponentFixture<PlanetDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
