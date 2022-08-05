import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGenerosComponent } from './ruta-generos.component';

describe('RutaGenerosComponent', () => {
  let component: RutaGenerosComponent;
  let fixture: ComponentFixture<RutaGenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaGenerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
