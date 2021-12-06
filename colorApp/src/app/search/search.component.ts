import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<string>();

  constructor() {}
  colorSearchQuery = '';

  ngOnInit(): void {
    this.colorSearchQuery = 'lemon';
    this.searchEvent();
  }

  searchEvent() {
    this.search.emit(this.colorSearchQuery);
  }
}
