import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGeneroDetalleComponent } from './ruta-genero-detalle.component';

describe('RutaGeneroDetalleComponent', () => {
  let component: RutaGeneroDetalleComponent;
  let fixture: ComponentFixture<RutaGeneroDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaGeneroDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGeneroDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
