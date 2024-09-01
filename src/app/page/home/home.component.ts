import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import data from '@page/data/data';
import { IServices } from '@page/interface/IServices';
import counterUp from 'counterup2';
import { environment } from 'src/environments/environment';
import Swiper, { Autoplay, Navigation } from 'swiper';

import { NzNotificationService } from 'ng-zorro-antd/notification';
Swiper.use([Navigation,Autoplay])

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient,private notification: NzNotificationService) { 
    this.form = this.fb.group({
      fname: [null, [Validators.required]],
      lname: [null, [Validators.required]],
      email: [null, [Validators.required,Validators.email]],
      service: [null,Validators.required],
      message: [null]
    });
  }
  services: IServices[];
  ngOnInit(): void {
    window.scroll(0,0);
    this.getSerrvice();
    setTimeout(()=>{
      this.swiperFunc();
    },300)
  }
  getSerrvice() {
    this.services = data; 
  }
  swiperFunc(){
    var swiper = new Swiper(".mySwiper", {
      autoplay:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  counterFunction(){
    counterUp(document.querySelector('.counter'),{
        duration: 1000,
        delay: 16
      })
    counterUp(document.querySelector('.counter1'),{
        duration: 1000,
        delay: 16
      })
    counterUp(document.querySelector('.counter2'),{
        duration: 1000,
        delay: 16
      })
    counterUp(document.querySelector('.counter3'),{
        duration: 1000,
        delay: 16
      })
  }
  submitForm(): void {
    if (this.form.valid) {
      this.http.post(environment.API_URL + '/send-email', this.form.value).subscribe((res:any) => { 
        this.notification.success(
          'Email Sent',
          res?.message,
          { nzPlacement: 'bottomRight' }
        );
      })
    } else {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
