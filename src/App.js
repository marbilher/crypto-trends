import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';

import MainPage from './MainPage'

import './css/resume.css'
import './vendor/bootstrap/css/bootstrap.css'
import './vendor/bootstrap/css/bootstrap-grid.css'
import './vendor/bootstrap/css/bootstrap-reboot.css'
import './vendor/fontawesome-free/css/all.css'
// import './scss/resume.scss'
require('./scss/resume.scss')






class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      messageFromServer: '',
    }
  }


// componentDidMount(){
//   const config = {
//     method: 'GET',
//     url: 'http://localhost:8080'

//   }
//   axios(config) 
//   .then(response => {
//   this.setState({
//     messageFromServer: response.data
//   })  
//   })
// }

render() {
  return (
  <div>
    <h2>Home</h2>
    <pre>{this.state.messageFromServer}</pre>

  </div>
  );
}
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin/register">Register new user</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul> */}

      <hr/>

      <Route exact path="/" component={MainPage}/>




    </div>
  </Router>
)
export default BasicExample
