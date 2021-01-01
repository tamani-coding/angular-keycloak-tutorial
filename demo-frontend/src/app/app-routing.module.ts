import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicSpaceComponent } from './public-space/public-space.component';
import { RestrictedSpaceComponent } from './restricted-space/restricted-space.component';

const routes: Routes = [
  { path: 'public', component: PublicSpaceComponent },
  { path: 'restricted', component: RestrictedSpaceComponent },
  { path: '**', component: PublicSpaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
