import React, { Component } from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import {connect} from 'react-redux';
import axios from 'axios';
// our single page application
class App extends Component {
  componentWillMount(){
    let posts = [];
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      posts = res.data
      this.props.fillInitState(posts);
    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    return(
    <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
        <Route exact path = "/" component = {Home} />
        <Route  path = "/about" component = {About} />
        <Route  path = "/contact" component = {Contact}/ >
        <Route path = "/:post_id" component = {Post} />
        {/* contact and about are also being treated as post_id.
        one way to fix this is change path to "/posts/:post_id"
        . Another way is to use switch. Using switch it routes to the first path match from top to bottom and breaks. */}

      </Switch>
      </div>
    </BrowserRouter>

    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    fillInitState: (posts) => dispatch({type: 'FILL_INIT',posts: posts})
  }
}
export default connect(null,mapDispatchToProps)(App);
