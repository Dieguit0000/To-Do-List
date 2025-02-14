import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: Todo[] = [
    { id: 1, title: 'Tarea de prueba 1', completed: false },
    { id: 2, title: 'Tarea de prueba 2', completed: true }
  ];
  todosdeleted: Todo[] = [];
  newTodo: string = '';
  nextId: number = 1;

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({
        id: this.nextId++,
        title: this.newTodo.trim(),
        completed: false
      });
      this.newTodo = '';
    }
  }

  toggleTodo(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  deleteTodo(id: number) {
    // this.todos = this.todos.filter(t => t.id !== id);
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      this.todosdeleted.push(todo);
      this.todos = this.todos.filter(t => t.id !== id);
    }
  }

  restoreTodo(id:number) {
    const todo = this.todosdeleted.find(t => t.id === id);
    if (todo) {
      this.todos.push(todo);
      this.todosdeleted = this.todosdeleted.filter(t => t.id !== id);
    }
  }
}
