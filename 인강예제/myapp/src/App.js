import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.id = 3;
    this.state = {
      mode : 'welcome',
      selected_id : 2,
      subject : {title:'WEB', sub:'Wordl Wide Web!'},
      welcome : {title:'welcome', desc:'Hello, React'},
      contents : [
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'Javascript is for interactive'}
      ]
    }
  }
  render(){
  return (
    <div className="App">
      <Subject><Subject>
      <TOC></TOC>
      <Control></Control>
    </div>
  );
  }
}

export default App;
