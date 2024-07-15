import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryListComponent } from './category-pages/category-list/category-list.component';
import { CategoryFormComponent } from './category-pages/category-form/category-form.component';

const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'form', component: CategoryFormComponent },
  { path: 'list', component: CategoryListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
