import React, { Component } from 'react';

export default class CreateToDo extends Component {

  handleCreate(e){
    e.preventDefault();
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }

  render(){
    return(
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="What do I need to do?" ref="createInput" />
        <button>Create</button>
      </form>
    );
  }
}
