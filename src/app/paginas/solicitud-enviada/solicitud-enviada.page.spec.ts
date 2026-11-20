import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitudEnviadaPage } from './solicitud-enviada.page';

describe('SolicitudEnviadaPage', () => {
  let component: SolicitudEnviadaPage;
  let fixture: ComponentFixture<SolicitudEnviadaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudEnviadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
