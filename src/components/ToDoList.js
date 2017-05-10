import React, { Component } from 'react';
import ToDoListHeader from './ToDoListHeader';
import ToDoListItem from './ToDoListItem';


export default class ToDoList extends Component {

  renderItems(){
    let tasks = this.props.todos;
    console.log(`renderItems = ${tasks}`);
    return tasks.map((todo, index) => <ToDoListItem key={index} {...todo} toggleTask={this.props.toggleTask}
      saveTask={this.props.saveTask}
      />);
  }

  render(){
    return(
      <table>
        <ToDoListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
