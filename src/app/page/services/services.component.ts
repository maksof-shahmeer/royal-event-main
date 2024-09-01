import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IServices } from '@page/interface/IServices';
import data from '../data/data';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less']
})
export class ServicesComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
  services:IServices[];
  serviceList:IServices[];
  ngOnInit(): void {
    window.scroll(0,0);
    this.getServices(!this.activatedRoute.snapshot.queryParams['id'] || 1);
    this.getAllService();
  }
  getServices(id){
     this.services = data;
     this.services = this.services.filter((row)=> row.id == id);
  }
  getAllService() {
    this.serviceList = data; 
  }
}
