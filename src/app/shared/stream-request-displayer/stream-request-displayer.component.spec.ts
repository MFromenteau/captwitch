import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapcodTestBed } from 'src/tests/base-testbed';

import { StreamRequestDisplayerComponent } from './stream-request-displayer.component';

fdescribe('StreamRequestDisplayerComponent', () => {
  let component: StreamRequestDisplayerComponent;
  let fixture: ComponentFixture<StreamRequestDisplayerComponent>;

  beforeEach(async () => {
    const testbed = CapcodTestBed;
    testbed.declarations.push(StreamRequestDisplayerComponent);
    await TestBed.configureTestingModule(testbed)
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
