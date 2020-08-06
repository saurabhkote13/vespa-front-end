import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadBrouchereComponent } from './download-brouchere.component';

describe('DownloadBrouchereComponent', () => {
  let component: DownloadBrouchereComponent;
  let fixture: ComponentFixture<DownloadBrouchereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadBrouchereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadBrouchereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
