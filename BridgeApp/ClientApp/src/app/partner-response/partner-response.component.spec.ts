import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerResponseComponent } from './partner-response.component';

describe('PartnerResponseComponent', () => {
  let component: PartnerResponseComponent;
  let fixture: ComponentFixture<PartnerResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
