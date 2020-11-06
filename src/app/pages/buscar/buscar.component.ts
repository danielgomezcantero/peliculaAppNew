import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public moviesBuscada:Movie[]=[];
  public textoBuscado='';

  constructor( private acivatedRoute: ActivatedRoute, private peiculasService: PeliculasService ) { }

  ngOnInit(): void {

    this.acivatedRoute.params.subscribe( params => {
      console.log(params.texto );
      this.textoBuscado=params.texto;

      this.peiculasService.buscarPeliculas( params.texto).subscribe( movies=>{
        console.log(movies);
        this.moviesBuscada = movies;
      })

    })
  }

}
