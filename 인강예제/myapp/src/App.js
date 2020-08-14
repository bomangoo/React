import React, { Component } from 'react';
import Subject from './component/Subject';
import TOC from './component/TOC';
import ReadContent from './component/ReadContent';
import Control from './component/Control';
import Create from './component/Create';
import Update from './component/Update';

class App extends Component {
  constructor(props){
    super(props);
    this.last_id = 3;
    this.state = {
      mode : 'welcome',
      selected_id : 0,
      subject : {title:'WEB', sub:'World Wide Web!'},
      welcome : {title:'welcome', desc:'Hello, React'},
      contents : [
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'Javascript is for interactive'}
      ]
    }
  }

  getReadContent(){
    for(let i = 0; i < this.state.contents.length; i++){
      let data = this.state.contents[i]
      if(data.id === this.state.selected_id){
        return data;
      }
    }
  }

  getContent (){
    let _article, _contents;
    if(this.state.mode === 'read'){
      _contents = this.getReadContent();
      _article = <ReadContent title={_contents.title} desc={_contents.desc}></ReadContent>;
    }else if(this.state.mode === 'welcome'){
      _contents = this.state.welcome;
      _article = <ReadContent title={_contents.title} desc={_contents.desc}></ReadContent>
    }else if(this.state.mode === 'create'){
      _article = <Create onSubmit = {function(_title, _desc) {
        this.last_id += 1;
        _contents = Array.from(this.state.contents);
        _contents.push({
          id: this.last_id,
          title: _title,
          desc: _desc
        });
        this.setState({
          contents: _contents,
          mode: 'read',
          selected_id: this.last_id
        })
      }.bind(this)}></Create>
    }else if(this.state.mode === 'update'){
      if(this.state.selected_id === 0){
        alert('수정하실 타이틀을 선택하세요');
        this.setState({
          selected_id: 0,
          mode: 'welcome'
        })
        return false;
      }else{
        _contents = this.getReadContent();
        _article = <Update data={_contents} onSubmit = {function(_id, _title, _desc){
          _contents = Array.from(this.state.contents);
          for(let i = 0; i < _contents.length; i++){
            if(_contents[i].id === _id){
              _contents[i] = {id: _id, title: _title, desc: _desc};
            }
          }
          this.setState({
            contents:_contents,
            mode:'read'
          })
        }.bind(this)}></Update>
      }
    }
    return _article;
  }

  render(){
  return (
    <div className="App">
      <Subject
        title = {this.state.subject.title}
        sub = {this.state.subject.sub}
        onChangePage = {function(){
          this.setState({
            mode : 'welcome'
          })
        }.bind(this)}
      ></Subject>
      <TOC
        onChangePage={function(id){
          this.setState({
            mode: 'read',
            selected_id: Number(id)
          });
        }.bind(this)}
        data={this.state.contents}
      ></TOC>
      <Control
        onChangeMode = {function(_mode){
          if(_mode === 'remove'){
            if(this.state.selected_id == 0){
              alert('삭제하실 타이틀을 선택해 주세요');
            }else if(window.confirm("삭제하시겠습니까?")){
              let _contents = Array.from(this.state.contents);
              for(let i = 0; i < _contents.length; i++){
                if(_contents[i].id === this.state.selected_id){
                  _contents.splice(i, 1);
                }
              }
              this.setState({
                mode: 'welcome',
                contents: _contents,
                selected_id: 0
              });
              alert('삭제되었습니다.');
            }
          }else{
            this.setState({
              mode: _mode
            })
          }
        }.bind(this)}
      ></Control>
      {this.getContent()}
    </div>
  )
  }
}

export default App;
