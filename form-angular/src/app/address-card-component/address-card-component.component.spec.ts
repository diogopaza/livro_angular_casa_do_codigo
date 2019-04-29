import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressCardComponentComponent } from './address-card-component.component';

describe('AddressCardComponentComponent', () => {
  let component: AddressCardComponentComponent;
  let fixture: ComponentFixture<AddressCardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressCardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
