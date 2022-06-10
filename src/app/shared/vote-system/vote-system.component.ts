import { Component, Input, OnInit } from '@angular/core';
import { ScoreVote } from 'src/app/core/classes/score-vote';
import { VoteStatus } from 'src/app/core/classes/vote-status';
import { StreamRequestService } from 'src/app/core/services/stream-request/stream-request.service';
import { VoteService } from 'src/app/core/services/vote/vote.service';

@Component({
  selector: 'app-vote-system',
  templateUrl: './vote-system.component.html',
  styleUrls: ['./vote-system.component.scss']
})
export class VoteSystemComponent implements OnInit {
  @Input() streamRequestId: string;
  scoreVote: ScoreVote;
  voteStatus = VoteStatus;
  constructor(public streamRequestService: StreamRequestService,
    public voteService: VoteService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.streamRequestService.getScore(this.streamRequestId).subscribe({
      next: (scoreVote: ScoreVote) => {
        this.scoreVote = scoreVote;
      }
    });
  }

  vote(voteStatus: VoteStatus) {
    this.voteService.addOrUpdate(this.streamRequestId, voteStatus).subscribe({
      next: (res: any) => {
        this.scoreVote.vote = res;
        this.load();
      }
    });
  }
}
