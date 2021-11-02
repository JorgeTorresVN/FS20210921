import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActoresComponent } from './actor';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ActoresComponent },
  { path: 'inicio', component: ActoresComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
