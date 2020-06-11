import React, { Component } from 'react';
import CommentBox from './CommentBox';
import Comments from './Comments';

import {Container, Row} from "react-bootstrap";

class CommentBoxWrap extends Component {
  constructor(props) {
    super(props);
    this.handleAddComment = this.handleAddComment.bind(this);

    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    /*global Ably*/
    const channel = Ably.channels.get('comments');
  
    channel.attach();
      channel.once('attached', () => {
        channel.history((err, page) => {
          
          const comments = Array.from(page.items, item => item.data)
  
          this.setState({ comments });
  
          channel.subscribe((msg, err) => {
            const commentObject = msg['data'];
            this.handleAddComment(commentObject);
          })
        });
      });
  }

  handleAddComment(comment) {
    this.setState(prevState => {
      return {
        comments:[comment].concat(prevState.comments)
      };
    });
  }

  render() {
    return (
      <Container>
        <section>
              <div className="containerInputArea">
                <CommentBox handleAddComment={this.handleAddComment} />
                <Comments comments={this.state.comments} />
              </div>
        </section>
      </Container>
    );
  }
}

export default CommentBoxWrap;