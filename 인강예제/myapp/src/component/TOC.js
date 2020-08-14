import React, { Component } from 'react';

class TOC extends Component {
    render(){
        let list = [];
        let data = this.props.data;
        for(let item of data){
            list.push(
                <li key={item.id}>
                    <a
                    href={"/content/"+item.id}
                    data-id={item.id}
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}
                    >{item.title}</a>
                </li>);
            }
        return(
            <nav>
                <ul>
                    {list}
                </ul>
            </nav>
        )
    }
}

export default TOC;