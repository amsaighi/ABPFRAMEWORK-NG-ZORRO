import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteComponent } from './route.component';

describe('RouteComponent', () => {
  let component: RouteComponent;
  let fixture: ComponentFixture<RouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
