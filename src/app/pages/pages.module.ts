import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeruComponent } from './peru/peru.component';
import { ChileComponent } from './chile/chile.component';
import { UruguayComponent } from './uruguay/uruguay.component';



@NgModule({
  declarations: [
    PeruComponent,
    ChileComponent,
    UruguayComponent
  ],
  exports:[
    PeruComponent,
    ChileComponent,
    UruguayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
