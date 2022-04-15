import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamRequestsDisplayerComponent } from './stream-requests-displayer.component';

describe('StreamRequestsDisplayerComponent', () => {
  let component: StreamRequestsDisplayerComponent;
  let fixture: ComponentFixture<StreamRequestsDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamRequestsDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamRequestsDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
