import React, { Component } from 'react';

class Control extends Component {
    render(){
        return(
            <ul>
                <li>
                    <a href="#" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeMode('create');
                    }.bind(this)}>Create</a>
                </li>
                <li>
                    <a href="#" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeMode('remove');
                    }.bind(this)}>Remove</a>
                </li>
                <li>
                    <a href="#" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeMode('update');
                    }.bind(this)}>Update</a>
                </li>
            </ul>
        )
    }
}

export default Control;