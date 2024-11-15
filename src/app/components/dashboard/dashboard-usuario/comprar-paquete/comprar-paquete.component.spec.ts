import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarPaqueteComponent } from './comprar-paquete.component';

describe('ComprarPaqueteComponent', () => {
  let component: ComprarPaqueteComponent;
  let fixture: ComponentFixture<ComprarPaqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprarPaqueteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprarPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
