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
  error: string = null;

  constructor(private todosService: TodosService) {
    this.handleError = this.handleError.bind(this);
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
      }, this.handleError);
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id !== id);
      }, this.handleError);
  }

  completeTodo(id: number) {
    const todo = this.todos.find(item => item.id === id);

    this.todosService.updateTodo(id, todo)
      .subscribe(() => {
        todo.completed = true;
      }, this.handleError);
  }

  handleError(error) {
    this.error = error.message;
  }

  closeAlert() {
    this.error = null;
  }
}
