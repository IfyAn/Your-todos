import React, { Component } from 'react';

class AddTodo extends Component{
    state={
        content: ''
    }
    deepChange=(e)=>{
        this.setState({
            content:e.target.value
        })
    }
    deepSubmit=(e)=>{
        e.preventDefault()
        this.props.prop(this.state)
        this.setState({
            content:''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={ this.deepSubmit }>
                    <label>Add new todo</label>
                    <input type="text" onChange={ this.deepChange } value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo