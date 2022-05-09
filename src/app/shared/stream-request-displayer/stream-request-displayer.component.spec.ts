import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamRequestDisplayerComponent } from './stream-request-displayer.component';

describe('StreamRequestDisplayerComponent', () => {
  let component: StreamRequestDisplayerComponent;
  let fixture: ComponentFixture<StreamRequestDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamRequestDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamRequestDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
