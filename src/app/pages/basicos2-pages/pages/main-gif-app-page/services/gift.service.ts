import { GiftSearchBoxComponent } from './../components/gift-search-box/gift-search-box.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
const GIPHY_API_KEY = 'lyYJuiWfuKxNPrifrgtwKp2kDs3rn98g';

@Injectable({
  providedIn: 'root',
})
export class GiftService {
  private _tagsHistory: BehaviorSubject<string[]> = new BehaviorSubject<
    string[]
  >([]);
  public tagsHistory$ = this._tagsHistory.asObservable();
  private _gifsList: BehaviorSubject<Gif[]> = new BehaviorSubject<Gif[]>([]);
  public gifsList$ = this._gifsList.asObservable();
  private readonly apiKey = GIPHY_API_KEY;
  private readonly _apiURL = 'https://api.giphy.com/v1/gifs';
  private _httpCliente = inject(HttpClient);

  constructor() {
    const gifs = JSON.parse(localStorage.getItem('gifs') || '{}');
    const tags = JSON.parse(localStorage.getItem('tags') || '[]');
    this._tagsHistory.next(tags);
    this._gifsList.next(gifs[tags[0]]);
  }

  addTagToHistory(tag: string): void {
    if (tag.length === 0) {
      return;
    }

    let currentTags = this._tagsHistory.value;
    let newTags = [tag, ...currentTags];
    const lastTag = newTags[newTags.length - 1];
    const gifs = JSON.parse(localStorage.getItem('gifs') || '{}');

    const existTag = currentTags.includes(tag);
    if (existTag) {
      currentTags = currentTags.filter((currentTag) => currentTag !== tag);
      this._gifsList.next(gifs[tag]);
    } else {
      this.searchTag(tag).subscribe((resp) => {
        this._gifsList.next(resp.data);
        gifs[tag] = resp.data;
        localStorage.setItem('gifs', JSON.stringify(gifs));
        const size = Object.keys(gifs).length;
        if (size > 10) {
          const { [lastTag]: _, ...rest } = gifs;
          localStorage.setItem('gifs', JSON.stringify(rest));
        }
      });
    }

    newTags = [tag, ...currentTags].slice(0, 10);
    this._tagsHistory.next(newTags);
    localStorage.setItem('tags', JSON.stringify(newTags));
  }

  searchTag(tag: string): Observable<SearchResponse> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10');
    const url = `${this._apiURL}/search`;
    return this._httpCliente.get<SearchResponse>(url, { params });
  }
}
