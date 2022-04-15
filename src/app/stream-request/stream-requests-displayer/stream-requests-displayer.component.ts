import { Component, OnInit } from '@angular/core';
import { StreamRequestService } from 'src/app/core/services/stream-request/stream-request.service';

@Component({
  selector: 'app-stream-requests-displayer',
  templateUrl: './stream-requests-displayer.component.html',
  styleUrls: ['./stream-requests-displayer.component.scss']
})
export class StreamRequestsDisplayerComponent implements OnInit {

  streamRequests: any[];

  constructor(private streamRequestService: StreamRequestService) { }

  ngOnInit(): void {
    this.streamRequestService.getAll().subscribe({
      next: (result) => {
        this.streamRequests = result;
      }
    });
  }

}
