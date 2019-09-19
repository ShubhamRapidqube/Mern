import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onClick = () => {
        let todo = this.state.title;
        if(todo !== ''){
            this.props.addTodo(todo)
            this.setState({
                title : ''
            })
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row p-4">
                        <div className="col-8">
                            <input 
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.onChange} 
                            style={{width:"100%", height:"35px"}} 
                            placeholder="Add Todo ...">
                            </input>
                        </div>
                        <div className="col-4">
                            <button onClick={this.onClick} className="btn btn-success" style={{width:"100%"}}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTodo
