import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    children: []
  },
  {
    path: 'products',
    pathMatch: 'full',
    component: ListComponent,
    children: []
  },
  {
    path: 'products/new',
    pathMatch: 'full',
    component: NewComponent,
    children: []
  },
  {
    path: 'products/edit/:id',
    pathMatch: 'full',
    component: EditComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
