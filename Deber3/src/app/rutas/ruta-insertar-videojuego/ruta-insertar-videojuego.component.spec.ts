import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaInsertarVideojuegoComponent } from './ruta-insertar-videojuego.component';

describe('RutaInsertarVideojuegoComponent', () => {
  let component: RutaInsertarVideojuegoComponent;
  let fixture: ComponentFixture<RutaInsertarVideojuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaInsertarVideojuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaInsertarVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
