import React, { Component, Fragment } from 'react';
import './App.css';
import "materialize-css/dist/css/materialize.css"
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { FeedPage } from './pages/FeedPage';
import M from "materialize-css"
import { Switch, Route, Redirect } from 'react-router-dom';
import { PostPage } from './pages/PostPage';
import { PeoplePage } from "./pages/PeoplePage";
import { ProfilePage } from './pages/ProfilePage';
import { UserPage } from './pages/UserPage';
import { LogInRegisterPage } from './pages/LogInRegisterPage';
import { authService } from '../services/authService';

export class App extends Component {
  constructor(props) {
    super(props);
  }

 
  componentDidMount() {
    // M.AutoInit();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <main>

          {
            authService.isUserLogged() ?
              <Switch>
                <Route exact path="/feed" component={FeedPage} />
                <Route path="/post/:type/:id" component={PostPage} />
                {/* <Route path="/post/:id" component={PostPage} /> */}
                <Route path="/profile" component={ProfilePage} />
                <Route exact path="/people" component={PeoplePage} />
                <Route exact path="/users/:id" component={UserPage} />
                <Redirect from='/' to='/feed' />
              </Switch>

              :
              
              <Switch>
                <Route exact path="/" component={LogInRegisterPage} />
               <Redirect from='/' to='/' />
              </Switch>
          }

        </main>
        <Footer />
      </Fragment>
    );
  }
}

