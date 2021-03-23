import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";

import Modal from "./modal/modal";
import SplashContainer from "./splash/splash_container";
import NavBarContainer from "./nav/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import PostsContainer from "./posts/posts_container";
import PostComposeContainer from "./posts/post_compose_container";
import ChoreListContainer from "./chores/chore_list_container";
import ExpensesContainer from "./expenses/expenses_container";
import Footer from "./footer/footer";
// import HouseCreateContainer from "./house/house_create_container";
// import HouseContainer from "./house/house_container";
// import ChoreFilter from "./chores/chore_filter";

import ProfileContainer from "./profile/profile_container";
import EventContainer from "./event/event_create_container";
import EventShowContainer from "./event/event_show_container";
import EventEditContainer from "./event/event_edit_container";
import TaskFormContainer from "./task/task_form_container";
import TaskShowContainer from "./task/task_show_container";
import TaskEditContainer from "./task/task_edit_container";
import EventIndexContainer from "./event/event_index_container";
import "./session/css_reset.css";

const App = () => (
  <div className="main-app-div">
    <Modal />
    <NavBarContainer />
    <Switch>
      {/* <ProtectedRoute
        exact
        path="/new_house"
        component={HouseCreateContainer}
      />
      <ProtectedRoute exact path="/houses" component={HouseContainer} /> */}
      <ProtectedRoute exact path="/posts">
        <PostComposeContainer />
        <PostsContainer />
      </ProtectedRoute>
      <ProtectedRoute exact path="/chores" component={ChoreListContainer}>
        <ChoreListContainer />
      </ProtectedRoute>
      <ProtectedRoute exact path="/expenses" component={ExpensesContainer} />

      <ProtectedRoute exact path="/tasks/new" component={TaskFormContainer} />
      <ProtectedRoute exact path="/events/new" component={EventContainer} />
      <Route exact path="/events/:eventId" component={EventShowContainer} />
      <Route exact path="/tasks/:taskId" component={TaskShowContainer} />
      <Route exact path="/events" component={EventIndexContainer} />
      <ProtectedRoute
        exact
        path="/events/:eventId/edit"
        component={EventEditContainer}
      />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute
        exact
        path="/tasks/:taskId/edit"
        component={TaskEditContainer}
      />

      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={SplashContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;
