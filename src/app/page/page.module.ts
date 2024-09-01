import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { RouterModule } from '@angular/router';
import { AntModule } from '../modules/ant.module';
import { ComponentsModule } from '../components/components.module';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
@NgModule({
  declarations: [
    PageComponent,
    ServicesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:PageComponent,children:[
        {
          path:'',component:HomeComponent
        },
        {
          path:'service',component:ServicesComponent
        }
      ]}
    ]),
    AntModule,
    ComponentsModule,
    NzCarouselModule,
    ScrollToModule.forRoot(),
    ReactiveFormsModule,
    NzFormModule,
    NzNotificationModule
  ]
})
export class PageModule { }
