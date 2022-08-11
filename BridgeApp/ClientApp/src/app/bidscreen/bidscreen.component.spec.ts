import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidscreenComponent } from './bidscreen.component';

describe('BidscreenComponent', () => {
  let component: BidscreenComponent;
  let fixture: ComponentFixture<BidscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
