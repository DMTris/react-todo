import React, { Component } from 'react';
//import components
import ToDoList from './components/ToDoList';
import CreateToDo from './components/CreateToDo';

const todos = [
  {
    task: 'Eat lunch',
    isComplete: true
  },
  {
    task: 'Create React App',
    isComplete: false
  },
  {
    task: 'Go to the gym',
    isComplete: false
  }
]

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos
    };
  }

  createTask(task){
    this.state.todos.push({
      task,
      isComplete: false
    });
    this.setState({todos: this.state.todos});
  }

  toggleTask(task){
    let foundToDo = todos.find(todo => todo.task === task);
    console.log(`toggleTask = ${foundToDo}`);
    foundToDo.isComplete = !foundToDo.isComplete;
    return this.setState({todos: this.state.todos});
  }

  saveTask(oldTask, newTask){
    let foundToDo = todos.find(todo => todo.task === oldTask);
    console.log(`saveTask = ${foundToDo}`)
    foundToDo.task = newTask;
    return this.setState({todos: this.state.todos});
  }

/* @todo Create the delete method for the delete
  // deleteTask(taskToDelete){
  //   //create a removeTask method here
  // }
*/

  render(){
    console.log(`App state = ${this.state.todos}`);
    return(
      <div>
        <h1>React To Do App</h1>
        <CreateToDo createTask={this.createTask.bind(this)} />
        <ToDoList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
        />
      </div>
    );
  }
}
