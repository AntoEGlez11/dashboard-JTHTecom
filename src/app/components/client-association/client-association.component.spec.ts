import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAssociationComponent } from './client-association.component';

describe('ClientAssociationComponent', () => {
  let component: ClientAssociationComponent;
  let fixture: ComponentFixture<ClientAssociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientAssociationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
