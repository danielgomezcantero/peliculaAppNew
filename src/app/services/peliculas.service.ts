import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';

import { MovieDetails } from '../interfaces/movie-response';
import { CreditsResponse, Cast } from '../interfaces/credits-response';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl='https://api.themoviedb.org/3/';
  private carteleraPage=1;
  public cargando: boolean = false;

  constructor( private http:HttpClient ) { }

  get params(){
    return{
      api_key:'6cee1ce91f2e73cbad51cc7a92f2c6bb',
      language:'es-ES',
      page: this.carteleraPage.toString(),
    }
  }


    resetCarteleraPage(){
      this.carteleraPage=1;
    }

    getCartelera():Observable<CarteleraResponse>{

      if(this.cargando){
        return;
      }

      this.cargando= true;

      return this.http.get<CarteleraResponse>(`${this.baseUrl}movie/now_playing`,{
        params: this.params
      }).pipe(
        tap( () =>{
          this.carteleraPage += 1;
          this.cargando= false;
        }
        ));
    }  


    buscarPeliculas( texto: string ):Observable<Movie[]>{
      const params = {...this.params, page:'1', query: texto};
      return this.http.get<CarteleraResponse>(`${ this.baseUrl }search/movie`, {
        params: params
      }).pipe(
        map(resp=> resp.results )
        )
    }

    getPeliculaDetalle( id:string ){

      return this.http.get<MovieDetails>(`${this.baseUrl}movie/${id}`,{
        params:this.params
      }).pipe(
        catchError(err => of(null))
      ); 
    }

    
    getCast( id:string ):Observable<Cast[]>{
      return this.http.get<CreditsResponse>(`${this.baseUrl}movie/${id}/credits`,{
        params:this.params
      }).pipe(
        map( resp => resp.cast),
        catchError(err =>of([]))
      );    

    }



  
}
