import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto-response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public productoList:Producto[] = [];

  constructor(  private productosService: ProductoService ) { 

    

    this.productosService.getProductos().subscribe(resp =>{
      
      this.productoList = resp.data;


      console.log(this.productoList[100].nombre);


    });
   
  }

  ngOnInit(): void {
  }

}
