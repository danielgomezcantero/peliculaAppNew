import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';

import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input()movies: Movie[];// recibo los datos desde el Homecomponent
  public mySwiper : Swiper;

  constructor() { }

  ngOnInit(): void {    
  }

  ngAfterViewInit():void{
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters     
      loop: true,      
    })
  }

  onClickPrev(){   
    this.mySwiper.slidePrev(); 
  }

  onClickNext(){
   this.mySwiper.slideNext();
 }

}
