import React, { Component } from 'react';

export default class ToDoListItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false
    }
  }

  onEditClick(){
    this.setState({isEditing: true});
  }

  onSaveClick(e){
    e.preventDefault();

    let oldTask = this.props.task;
    let newTask = this.refs.editInput.value;

    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false});
  }

  onCancelClick(){
    this.setState({isEditing: false});
  }

  renderActionsSection(){
    if(this.state.isEditing === true){
      return(
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    };
    return(
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button>Delete</button>
      </td>
    );
  }

  renderTaskSection(){
    const {task, isComplete} = this.props;
    console.log(`renderTaskSection = ${this.props}`);
    const taskStyle = {
      color: isComplete ? 'green' : 'red',
      cursor: 'pointer'
    };

    if(this.state.isEditing){
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={task} ref="editInput" />
          </form>
        </td>
      );
    }

    return (
      <td style={taskStyle}
          onClick={this.props.toggleTask.bind(this, task)}
      >
        {task}
      </td>
    );
  }

  render(){
    return(
        <tr>
          {this.renderTaskSection()}
          {this.renderActionsSection()}
        </tr>
    );
  }
}
