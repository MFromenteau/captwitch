import { Component, Input, OnInit } from '@angular/core';
import { StreamRequestService } from 'src/app/core/services/stream-request/stream-request.service';

@Component({
  selector: 'app-stream-requests-displayer',
  templateUrl: './stream-requests-displayer.component.html',
  styleUrls: ['./stream-requests-displayer.component.scss']
})
export class StreamRequestsDisplayerComponent implements OnInit {
  @Input() adminMode = false;
  public filters: any;
  streamRequests: any[];


  constructor(private streamRequestService: StreamRequestService) {
    this.filters = {};
  }

  ngOnInit(): void {
    if(!this.adminMode) {
      this.filters.validatedOnly = true;
    }
    this.load();
  }

  private load() {
    this.streamRequestService.getAll(this.filters).subscribe({
      next: (result) => {
        this.streamRequests = result;
      }
    });
  }

  filterChanged() {
    this.load();
  }
}
