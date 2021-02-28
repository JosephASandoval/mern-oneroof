import React from 'react';
import PostBox from '../posts/post_box';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            houses: [],
            posts: []
        }
    }
    
    componentWillMount() {
      console.log(this.props.currentUser.id)
      this.props.fetchUserPosts(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
      this.setState({ posts: newState.posts } );
    }   
    
    render() { //add house later
      const { posts, removePost } = this.props;
      
        if (posts.length === 0) {
          return (<div>This user has no Posts</div>)
        } else {
          return (
            <div>
              <h2>All of This User's Posts</h2>
              {posts.map(post => (
                <PostBox removePost={removePost} post={post} key={post._id} text={post.text} />
              ))}
            </div>
          );
        }
      }
}

export default Profile;
