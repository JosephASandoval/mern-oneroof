import React from 'react';
import PostBox from './post_box';
import '../../styles/post_compose.css'

class PostCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          text: "",
          newPost: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
      this.setState({newPost: nextProps.newPost.text});
  }

  handleSubmit(e) {
    e.preventDefault();
    let post = {
      text: this.state.text
    };

    this.props.composePost(post); 
    this.setState({text: ''})
  }

  update() {
    return e => this.setState({
      text: e.currentTarget.value
    });
  }

  render() {
    return (
        <div className='create-container'>
            <form onSubmit={this.handleSubmit}>
                <div className='entry-form'>
                    <p>New Post</p>
                    <input className='form-input'
                        type="textarea"
                        value={this.state.text}
                        onChange={this.update()}
                        placeholder="Write your post..."
                    />
                    <input className='submit-button' type="submit" value="Create Post" />
                </div>
            </form>
            <br />
            <PostBox text={this.state.newPost} />
        </div>
    )
  }
}

export default PostCompose;
