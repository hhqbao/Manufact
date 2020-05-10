import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-panel',
  templateUrl: './loading-panel.component.html',
  styleUrls: ['./loading-panel.component.scss'],
})
export class LoadingPanelComponent implements OnInit {
  @Input() text: string;

  constructor() {}

  ngOnInit(): void {}
}
