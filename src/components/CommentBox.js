import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.addComment = this.addComment.bind(this);
  }

  addComment(e) {
    
    e.preventDefault();
  
    
    const comment = e.target.elements.comment.value.trim();
    const name = e.target.elements.name.value.trim();
  
    
    if (name && comment) {
      const commentObject = { name, comment };
  
  
      /*global Ably*/
      const channel = Ably.channels.get('comments');
      channel.publish('add_comment', commentObject, err => {
        if (err) {
          console.log('Unable to publish message; err = ' + err.message);
        }
      });
  
      e.target.elements.comment.value = '';
      e.target.elements.name.value = '';
    }
  }

  render() {
    return (
      <div id="comentario">
        <h1 className="title lead">Deixe seu comentário aqui</h1>
        <form onSubmit={this.addComment}>
            <div>
              <input type="text" className="input" name="name" placeholder="Seu nome"/>
              <textarea className="textarea" name="comment" placeholder="Comentário"></textarea>
              <button onClick={window.scrollBy(0, 90)} className="btn btn-outline-success">Enviar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentBox;