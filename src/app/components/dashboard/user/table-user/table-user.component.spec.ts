import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUserComponent } from './table-user.component';

describe('TableComponent', () => {
  let component: TableUserComponent;
  let fixture: ComponentFixture<TableUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
