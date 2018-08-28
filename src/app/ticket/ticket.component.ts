import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loto-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  currentDate: Date;

  constructor() {
    this.currentDate = new Date();
  }

  ngOnInit() {}
}
