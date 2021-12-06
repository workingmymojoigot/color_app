import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IColors } from '../interface/colors';
import { switchMap, of } from 'rxjs';

export interface response {
  colors: Array<IColors>;
}

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  private colorsUrl = 'https://www.colr.org/';

  constructor(private http: HttpClient) {}

  getColors = (color: string): Observable<response> => {
    let url = `${this.colorsUrl}json/tag/${color}`;
    let url2 = `${this.colorsUrl}json/search_by_colors`;

    let resp = this.http.get<response>(url).pipe(
      switchMap((resp) => {
        if (resp.colors.length > 0) {
          return of(resp);
        } else {
          let hexcolor = this.getBackgroundColor(color);
          let params = {
            colors: hexcolor,
          };
          return this.http.get<response>(url2, { params: params });
        }
      })
    );
    return resp;
  };

  getBackgroundColor = (stringInput: string) => {
    const h = [...stringInput].reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    const s = 95,
      l = 35 / 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, '0'); // convert to Hex and prefix "0" if needed
    };
    return `${f(0)}${f(8)}${f(4)}`;
  };
}
