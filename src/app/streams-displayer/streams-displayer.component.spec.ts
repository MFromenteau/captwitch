import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamsDisplayerComponent } from './streams-displayer.component';

describe('StreamsDisplayerComponent', () => {
  let component: StreamsDisplayerComponent;
  let fixture: ComponentFixture<StreamsDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamsDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamsDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
