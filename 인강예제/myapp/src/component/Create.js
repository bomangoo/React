import React, { Component } from 'react';

class Create extends Component {
    render(){
        return (
            <article>
                <h2>Create</h2>
                <form action="" methode="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.desc.value
                        )
                    }.bind(this)}
                >
                    <p><input type="text" name="title" placeholder="title"/></p>
                    <p><textarea type="text" name="desc" placeholder="description"/></p>
                    <p><input type="submit"/></p>
                </form>
            </article>
        )
    }
}

export default Create;