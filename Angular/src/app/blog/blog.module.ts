import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services';
import {PaginatorModule} from 'primeng/paginator';
import { CommonComponentModule } from '../common-component';
import { BlogComponent, BLOG_COMPONENTES } from './blog.component';

@NgModule({
  declarations: [
    BLOG_COMPONENTES,
  ],
  exports: [
    BlogComponent,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    MyCoreModule, CommonServicesModule,
    PaginatorModule, CommonComponentModule, MyCoreModule,
  ]
})
export class BlogModule { }
