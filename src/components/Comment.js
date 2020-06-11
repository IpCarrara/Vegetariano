import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class Comment extends Component {
  render() {
    return (
      <article>
        <div className="containerComment" >
          <Col>
            <div className="cardComment">
              <img src="https://madenasolutions.com/wp-content/uploads/2018/04/placeholder-128x128.jpg" className="commentFoto" alt="Avatar" />
                <p>
                  <strong>{this.props.comment.name}</strong>
                  <br />
                  {this.props.comment.comment}
                </p>
              </div>
          </Col>
       </div>
      </article>
    );
  }
}

export default Comment;