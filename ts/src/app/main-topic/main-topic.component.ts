import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-topic',
  templateUrl: './main-topic.component.html',
  styleUrls: ['./main-topic.component.scss'],
})
export class MainTopicComponent implements OnInit {
  isExpanded = false;

  toggleOverflow() {
    this.isExpanded = !this.isExpanded;
  }

  constructor() {}

  ngOnInit(): void {}
}
