import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointscreenComponent } from './pointscreen.component';

describe('PointscreenComponent', () => {
  let component: PointscreenComponent;
  let fixture: ComponentFixture<PointscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
