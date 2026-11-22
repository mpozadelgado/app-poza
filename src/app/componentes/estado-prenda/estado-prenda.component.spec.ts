import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoPrendaComponent } from './estado-prenda.component';

describe('EstadoPrendaComponent', () => {
  let component: EstadoPrendaComponent;
  let fixture: ComponentFixture<EstadoPrendaComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoPrendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
