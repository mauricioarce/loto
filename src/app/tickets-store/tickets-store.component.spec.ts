import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsStoreComponent } from './tickets-store.component';

describe('TicketsStoreComponent', () => {
  let component: TicketsStoreComponent;
  let fixture: ComponentFixture<TicketsStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketsStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
