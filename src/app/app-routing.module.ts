import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchAlticciSequenceComponent } from './views/search-alticci-sequence/search-alticci-sequence.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  }, {
    path: 'search',
    component: SearchAlticciSequenceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
