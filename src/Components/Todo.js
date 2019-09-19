import React, { Component } from 'react'

class Todo extends Component {

    state={
        isChecked: this.props.todo.completed
    }

    titleStyle = () => {
        return {
            textDecoration : this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {

        let { _id, title } =  this.props.todo;

        return (
            <div className="container-fluid">

                <div className="container">

                    <div className="row p-2 text-center">

                        <div className="col-5">
                            <h4>{ _id }</h4>    
                        </div>
                        <div className="col-1">
                            <input type="checkbox" defaultChecked={this.state.isChecked} onChange={this.props.titleDone.bind(this, _id)}></input> 
                        </div>
                        <div className="col-5">
                            <h4 style={this.titleStyle()}>{ title }</h4>  
                        </div>
                        <div className="col-1">
                            <h4><button className="btn btn-danger" onClick={this.props.deleteTodo.bind(this, _id)}><i className="fa fa-trash" aria-hidden="true"></i>
</button></h4>    
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Todo
