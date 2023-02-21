import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PublicRoutingModule } from './public-routing.module';
import { PlayoutComponent } from './playout/playout.component';
import { PheaderComponent } from './pheader/pheader.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    PlayoutComponent,
    PheaderComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
