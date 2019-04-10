import React, {Component} from 'react'

class TodoItem extends Component {
    render() {
        let className = this.props.isDone? 'task-done' : '';
        return (
            <li>
              <label>
                <input type="checkbox"/>
                <span className={className}>{this.props.text}</span>
              </label>
            </li>
        );
    }
}

export default TodoItem;