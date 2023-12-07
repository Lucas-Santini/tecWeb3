import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCatsComponentComponent } from './components/lista-cats-component/lista-cats-component.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'cats-list'},
  {path: 'cats-list', component: ListaCatsComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
