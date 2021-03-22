import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import PostsContainer from "./posts/posts_container";
import Splash from "./splash/splash";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ProfileContainer from "./profile/profile_container";
import HouseCreateContainer from "./house/house_create_container";
import HouseContainer from './house/house_container';
import PostComposeContainer from "./posts/post_compose_container";
import ChoreListContainer from './chores/chore_list_container';
import ExpensesContainer from './expenses/expenses_container';
import Chat from './chat/chat';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/new_house" component={HouseCreateContainer} />
      <ProtectedRoute exact path="/houses" component={HouseContainer} />
      <ProtectedRoute exact path="/posts">
        <PostComposeContainer />
        <PostsContainer />
      </ProtectedRoute>
      <ProtectedRoute exact path="/profile" component={ProfileContainer}/>
      <ProtectedRoute exact path='/chores' component={ChoreListContainer}/>
      <ProtectedRoute exact path='/expenses' component={ExpensesContainer}/>
    </Switch>
    <ProtectedRoute path='' component={Chat} />
  </div>
);

export default App;
