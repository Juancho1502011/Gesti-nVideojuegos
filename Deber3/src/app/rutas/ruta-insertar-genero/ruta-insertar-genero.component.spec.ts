import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaInsertarGeneroComponent } from './ruta-insertar-genero.component';

describe('RutaInsertarGeneroComponent', () => {
  let component: RutaInsertarGeneroComponent;
  let fixture: ComponentFixture<RutaInsertarGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaInsertarGeneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaInsertarGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
