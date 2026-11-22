import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPrendaComponent } from './tarjeta-prenda.component';

describe('TarjetaPrendaComponent', () => {
  let component: TarjetaPrendaComponent;
  let fixture: ComponentFixture<TarjetaPrendaComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaPrendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
