import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceClientsTableComponent } from './service-clients-table.component';

describe('ServiceClientsTableComponent', () => {
  let component: ServiceClientsTableComponent;
  let fixture: ComponentFixture<ServiceClientsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceClientsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceClientsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
