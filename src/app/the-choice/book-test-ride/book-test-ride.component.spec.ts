import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTestRideComponent } from './book-test-ride.component';

describe('BookTestRideComponent', () => {
  let component: BookTestRideComponent;
  let fixture: ComponentFixture<BookTestRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTestRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTestRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
