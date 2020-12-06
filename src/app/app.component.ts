import {Component, OnInit} from '@angular/core';
import {ITodo, TodosService} from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  todos: Array<ITodo> = [];
  title: '';
  loading = false;

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.fetchTodo();
  }

  addTodo() {
    if (!this.title.trim()) {
      return null;
    }

    this.todosService.addTodo({
      completed: false,
      title: this.title
    })
      .subscribe(response => {
        this.todos.unshift(response);
        this.title = '';
      });
  }

  fetchTodo() {
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe(response => {
        this.todos = response;
        this.loading = false;
      });
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id !== id);
      });
  }

  completeTodo(id: number) {
    const todo = this.todos.find(item => item.id === id);

    this.todosService.updateTodo(id, todo)
      .subscribe(() => {
        todo.completed = true;
      });
  }
}
