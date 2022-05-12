import { Component, OnInit } from '@angular/core';
import { StreamRequestService } from 'src/app/core/services/stream-request/stream-request.service';

@Component({
  selector: 'app-stream-request-form',
  templateUrl: './stream-request-form.component.html',
  styleUrls: ['./stream-request-form.component.scss']
})
export class StreamRequestFormComponent implements OnInit {

  newStreamRequest: any;

  constructor(private service: StreamRequestService) {
    this.newStreamRequest = {};
  }

  ngOnInit(): void {
  }

  save() {
    this.service.add(this.newStreamRequest).subscribe(
      result => {
        this.service.streamAdded.emit(result);
      },
      error => {
        alert(error);
      }
    );
  }
}
