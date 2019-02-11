import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Home extends Component{
  render(){
     const postList = this.props.posts.length ? (
      this.props.posts.map(post => {
        return(<div className="post card" key= {post.id}>
          <Link to = {"/" + post.id} >
          <h4 className = "center"> {post.title}</h4>
        </Link>
          <p className = "card-content"> {post.body}</p>
        </div>)
      })
    ) : (
      <div className="center">
        <h5>No Posts Yet</h5>
      </div>
    )
     return(
       <div className="container">
         <h4 className="center">Home</h4>
              {postList}
       </div>
     )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts // extra props for home Component
  }
}

export default connect(mapStateToProps)(Home);
