import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamEventFormComponent } from './stream-event-form.component';

describe('StreamEventFormComponent', () => {
  let component: StreamEventFormComponent;
  let fixture: ComponentFixture<StreamEventFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamEventFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
