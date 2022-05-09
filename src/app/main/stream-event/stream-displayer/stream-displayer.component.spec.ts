import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamDisplayerComponent } from './stream-displayer.component';

describe('StreamDisplayerComponent', () => {
  let component: StreamDisplayerComponent;
  let fixture: ComponentFixture<StreamDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
