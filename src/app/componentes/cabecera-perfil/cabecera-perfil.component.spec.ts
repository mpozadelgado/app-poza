import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraPerfilComponent } from './cabecera-perfil.component';

describe('CabeceraPerfilComponent', () => {
  let component: CabeceraPerfilComponent;
  let fixture: ComponentFixture<CabeceraPerfilComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
