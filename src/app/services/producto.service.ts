import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoResponse } from '../interfaces/producto-response';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor( private http:HttpClient  ) { }

  getProductos():Observable<ProductoResponse>{
    return this.http.get<ProductoResponse>('/api/productos/');
  }
}
