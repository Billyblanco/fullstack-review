import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import { getUser } from './redux/reducers/user'
import { connect } from 'react-redux'
import PostsContainer from './components/PostsContainer';
import Landing from './components/Landing'
import { HashRouter, Route, Switch } from 'react-router-dom'


class App extends Component {

  componentDidMount() {
    this.props.getUser()
  }


  

  render() {
    return (
      <div>
        <HashRouter>
            <div>
              <Header />
                  <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/posts' component={PostsContainer}/>
                </Switch>
            </div>
        </HashRouter>
      
      </div>
    );
  }
}


export default connect(null, { getUser })(App)
