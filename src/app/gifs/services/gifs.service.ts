import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = '1IJoM1rJGBtztq5xfbuVW6tHs3TiQSCT';
  private urlApi: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor( private http: HttpClient ) {
    this._historial = JSON.parse( localStorage.getItem('gifHistorial')! ) || [];
    this.resultados = JSON.parse( localStorage.getItem('gifResultados')! ) || [];
  }

  buscarGifs( query: string = '' ) {
    query = query.trim().toLocaleLowerCase();

    // para que no se dupliquen
    if ( !this._historial.includes(query) ) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('gifHistorial', JSON.stringify(this._historial));      
    }

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query);

    this.http.get<SearchGifsResponse>(`${ this.urlApi }/search`, { params })
      .subscribe(resp => {
        this.resultados = resp.data;
        localStorage.setItem('gifResultados', JSON.stringify(this.resultados));
      })
  }
}
