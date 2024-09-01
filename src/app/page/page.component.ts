import { Component, OnInit } from '@angular/core';
import Swiper,{ Navigation, Pagination } from 'swiper';
import WOW from 'wow.js';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit {

  constructor() { 
  
  }
  wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  ngOnInit(): void {
    setTimeout(()=>{
      this.heroSlider();
    },100)
    this.wow.init();
  }
  heroSlider(){
    var swiper = new Swiper(".mySwiper", {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    var swiper = new Swiper(".client-slider", {
      modules: [Navigation, Pagination],
      autoplay: {
        delay: 2000,
      },
      loop:true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
    var swiper = new Swiper(".service-slider", {
      modules: [Navigation, Pagination],
      slidesPerView:3,
      spaceBetween: 20,
      loop:true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
