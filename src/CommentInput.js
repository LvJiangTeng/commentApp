import React, { Component } from 'react'

class CommentInput extends Component {
  constructor(){
    super()
    this.state={
      username: '',
      content: '',
      createdTime: ''
    }
  }
  componentWillMount(){
    this._loadUsername ()
  }
  componentDidMount(){
    this.textarea.focus()
  }
  _saveUsername=(username)=>{
    localStorage.setItem('username',username)
  }
  _loadUsername= ()=> {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({ username })
    }
  }
  handleInputChange=e=>{
    this.setState({
      username:e.target.value
    })
  }
  handleInputBlur=e=>{
    this._saveUsername(e.target.value)
  }
  
  handleTextAreaChange=e=>{
    this.setState({
      content:e.target.value
    })
  }
  handleSubmit=()=>{
    if(this.props.onSubmit){
      const { username, content } = this.state
      const createdTime=+new Date()
      this.props.onSubmit({username, content,createdTime})
    }
    this.setState({ content: '' })
  }

  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input onChange={this.handleInputChange} value={this.state.username}  onBlur={this.handleInputBlur} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea ref={(textarea)=>this.textarea=textarea} onChange={this.handleTextAreaChange} value={this.state.content}/>
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput