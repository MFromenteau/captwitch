import { VoteStatus } from "./vote-status";

export class Vote {
  id: number;
  userId: number;
  status: VoteStatus;
  streamRequestId: number;
}
