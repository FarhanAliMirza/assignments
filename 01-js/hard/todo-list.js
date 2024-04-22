/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todo = [];
  }
  add(todo) {
    this.todo.push(todo);
  }
  remove(indexOfTodo) {
    this.todo.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo) {
    if (index < this.todo.length) {
      this.todo[index] = updatedTodo;
    }
  }
  get(indexOfTodo) {
    if (indexOfTodo < this.todo.length) {
      return this.todo[indexOfTodo];
    } else {
      return null;
    }
  }
  getAll() {
    return this.todo;
  }
  clear() {
    this.todo = [];
  }
}
const List = new Todo();
List.add("first todo");
List.add("second todo");
console.log(List.get(1));
List.update(1, "updated");
console.log(List.getAll());
module.exports = Todo;
