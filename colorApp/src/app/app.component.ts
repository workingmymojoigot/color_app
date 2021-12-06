import { Component, OnInit } from '@angular/core';
import { response } from './interface/colors';
import { ColorsService } from './service/colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private colorService: ColorsService) {}

  title = 'colorApp';
  jsonResponse: response | undefined;

  ngOnInit() {}

  getData(event: string) {
    this.colorService
      .getColors(event)
      .subscribe((resp: response) => (this.jsonResponse = resp));
  }
}
