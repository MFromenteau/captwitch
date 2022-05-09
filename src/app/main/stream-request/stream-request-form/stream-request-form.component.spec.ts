import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamRequestFormComponent } from './stream-request-form.component';

describe('StreamRequestFormComponent', () => {
  let component: StreamRequestFormComponent;
  let fixture: ComponentFixture<StreamRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamRequestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
