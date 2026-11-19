import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrendaDetallePage } from './prenda-detalle.page';

describe('PrendaDetallePage', () => {
  let component: PrendaDetallePage;
  let fixture: ComponentFixture<PrendaDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrendaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
