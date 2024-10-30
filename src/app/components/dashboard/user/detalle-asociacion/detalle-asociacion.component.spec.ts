import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAsociacionComponent } from './detalle-asociacion.component';

describe('DetalleAsociacionComponent', () => {
  let component: DetalleAsociacionComponent;
  let fixture: ComponentFixture<DetalleAsociacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleAsociacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleAsociacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
