import { TodoFormComponent } from './todo-pages/todo-list/todo-form/todo-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-pages/todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoFormComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
