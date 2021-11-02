import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActoresComponent, ACTORES_COMPONENTES } from '.';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services';
import { CommonComponentModule } from '../common-component';



@NgModule({
  declarations: [ACTORES_COMPONENTES],
  exports: [ActoresComponent],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    MyCoreModule, CommonServicesModule,
   CommonComponentModule, MyCoreModule,
  ]
})
export class ActorModule { }
