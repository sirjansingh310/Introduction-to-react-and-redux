import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deletePostActions} from '../actions/postActions'
class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }
  render(){
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>

      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id; // param is string
 return {
   post: state.posts.find(post => post.id === parseInt(id))
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost : (id) => {dispatch(deletePostActions(id))} // need not call state.dispatch(actionobj)
          // directly call dispatch func which was passed as param
          // connect function handles what to do with this callback
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);
