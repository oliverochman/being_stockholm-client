import React, { Component } from 'react';
import { Container, Sidebar } from 'semantic-ui-react';
import Footer from './Components/Footer';
import Map from './Components/Map'
import MenuSidebar from './Components/MenuSidebar';
import { Switch, Route } from 'react-router-dom'
import LogInSignUp from './Components/LogInSignUp';
import AboutProject from './Components/AboutProject';
import Partners from './Components/Partners';
import GetInTouch from './Components/GetInTouch';
import LegalInfo from './Components/LegalInfo';
import { connect } from 'react-redux';


class App extends Component {
  render() {

    return (
      <>
        <Sidebar.Pushable
          as={Container}
          id='main-content'
        >

          <Switch>
            <Route exact path='/' component={Map}></Route>
            <Route exact path='/log-in' component={LogInSignUp}></Route>
            <Route exact path='/about' component={AboutProject}></Route>
            <Route exact path='/contact' component={GetInTouch}></Route>
            <Route exact path='/partnerds' component={Partners}></Route>
            <Route exact path='/legal-info' component={LegalInfo}></Route>
          </Switch>

          <MenuSidebar/>
        </Sidebar.Pushable>
        <Footer/>
      </>
    )
  }
}

export default connect()(App)
