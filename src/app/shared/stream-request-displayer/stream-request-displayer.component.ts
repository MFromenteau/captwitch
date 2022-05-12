import { Component, Input } from '@angular/core';
import { StreamRequestService } from 'src/app/core/services/stream-request/stream-request.service';

@Component({
  selector: 'app-stream-request-displayer',
  templateUrl: './stream-request-displayer.component.html',
  styleUrls: ['./stream-request-displayer.component.scss']
})
export class StreamRequestDisplayerComponent {
  @Input() streamRequest: any;
  @Input() adminMode = false;

  constructor(private streamRequestService: StreamRequestService) { }

  validate() {
    const patch = [
      {
        op: 'replace',
        path: '/validatedAt',
        value: new Date()
      }
    ];
    this.streamRequestService.patch(this.streamRequest.id, patch).subscribe({
      next: (res) => {
        this.streamRequest = res;
      }
    })
  }
}
