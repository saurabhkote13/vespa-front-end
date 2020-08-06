import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatrComponent } from './batr.component';

describe('BatrComponent', () => {
  let component: BatrComponent;
  let fixture: ComponentFixture<BatrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
