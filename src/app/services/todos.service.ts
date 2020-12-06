import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

export interface ITodo {
  completed: boolean;
  title: string;
  id?: number;
}

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

@Injectable({providedIn: 'root'})
export class TodosService {
  constructor(private http: HttpClient) {
  }

  addTodo(todo: ITodo) {
    return this.http.post<ITodo>(BASE_URL, todo);
  }

  fetchTodos() {
    return this.http.get<Array<ITodo>>(`${BASE_URL}?_limit=10`)
      .pipe(delay(1500));
  }

  deleteTodo(id: number) {
    return this.http.delete(`${BASE_URL}/${id}`);
  }

  updateTodo(id: number, todo: ITodo) {
    return this.http.put(`${BASE_URL}/${id}`, todo);
  }
}
