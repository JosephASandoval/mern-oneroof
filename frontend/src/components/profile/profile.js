import React from 'react';
import { Link } from 'react-router-dom';
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
      const { posts, deletePost } = this.props;
      console.log(posts)
      const sortedPosts = [...posts].reverse();
      console.log(sortedPosts)
      
        if (sortedPosts.length === 0) {
          return (
            <>
              <Link to='/houses'>House</Link>
              <div>This user has no Posts</div>
            </>
          )
        } else {
          return (
            <>
              <Link to='/houses'>House</Link>
              <div>
                <h2>All of This User's Posts</h2>
                <ul>
                  {sortedPosts.map(post => (
                    <PostBox deletePost={deletePost} post={post} key={post._id} text={post.text} />
                  ))}
                </ul>
              </div>
            </>
          );
        }
      }
}

export default Profile;
