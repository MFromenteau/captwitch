import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { ScoreVote } from 'src/app/core/classes/score-vote';
import { VoteStatus } from 'src/app/core/classes/vote-status';
import { StreamRequestService } from 'src/app/core/services/stream-request/stream-request.service';
import { CapcodTestBed } from 'src/tests/base-testbed';

import { VoteSystemComponent } from './vote-system.component';

fdescribe('VoteSystemComponent', () => {
  let component: VoteSystemComponent;
  let fixture: ComponentFixture<VoteSystemComponent>;

  beforeEach(async () => {
    const testbed = CapcodTestBed;
    testbed.declarations.push(VoteSystemComponent);
    testbed.providers.push(MockProvider(StreamRequestService, {
      getScore: () => of()
    }));
    await TestBed.configureTestingModule(testbed)
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('load', () => {
    const scoreVote = new ScoreVote();
    scoreVote.score = 5;
    component.streamRequestService.getScore = () => of(scoreVote);
    component.load();
    expect(component.scoreVote).toEqual(scoreVote);
  });

  it('vote', () => {
    component.scoreVote = new ScoreVote();
    const spy = spyOn(component, "load");
    const voteStatus = VoteStatus.UpVote;
    const vote = <any>{ status: voteStatus };

    component.voteService.addOrUpdate = () => of(vote)
    component.vote(voteStatus);

    expect(component.scoreVote.vote).toEqual(vote);
    expect(component.scoreVote.vote.status).toEqual(vote.status);
    expect(spy).toHaveBeenCalled();
  });
});
