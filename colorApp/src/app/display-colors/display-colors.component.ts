import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { response } from '../interface/colors';

@Component({
  selector: 'app-display-colors',
  templateUrl: './display-colors.component.html',
  styleUrls: ['./display-colors.component.css'],
})
export class DisplayColorsComponent implements OnInit, OnChanges {
  @Input() displayData: response | undefined;

  constructor() {}
  jsonResponse: response | undefined;

  ngOnInit(): void {}

  ngOnChanges() {
    this.jsonResponse = this.displayData;
  }
}
