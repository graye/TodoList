import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  todos:Array<TodoItem>;
  newTodo:string;

  constructor(){
    this.todos = [];
  }

  removeItem(index:number){
    this.todos.splice(index, 1);
  }

  addItem(){
    this.todos.push(new TodoItem(this.newTodo));
    this.newTodo = '';
  }
}

class TodoItem implements ITodoItem<string>{
  content:string;

  constructor(c:string){
    this.content = c;
  }
}

interface ITodoItem<T> {
  content:T;
}