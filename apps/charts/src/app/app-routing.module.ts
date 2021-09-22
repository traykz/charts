import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficaComponent } from './grafica/grafica.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: GraficaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


