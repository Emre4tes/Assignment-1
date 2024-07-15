import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-pages/todo-list/todo-list.component';
import { TodoFormComponent } from './todo-pages/todo-list/todo-form/todo-form.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'form', component: TodoFormComponent },
  { path: 'list', component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
