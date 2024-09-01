import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }
  visible:boolean = false;
  checkScollTop:number = 0;
  currentTab:string = 'home';
  ngOnInit(): void {
    this.currentMenu(this.router.url.split('/').pop() || '')
  }
  open(): void {
    this.visible = !this.visible;
    // currentMenu()
  }
  currentMenu(value){
    this.currentTab = value;
  }
  @HostListener('window:scroll', ['$event']) onWindowScroll(e) {
    this.checkScollTop = e.target['scrollingElement'].scrollTop;
  }
}
