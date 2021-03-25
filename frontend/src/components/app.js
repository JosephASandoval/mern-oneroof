import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import Modal from "./modal/modal";
import SplashContainer from "./splash/splash_container";
import MainNavBarContainer from "./main_navbar/main_navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import Team from "./team/team";
import ProfileContainer from "./profile/profile_container";
import MeetingContainer from "./meeting/meeting_create_container";
import MeetingShowContainer from "./meeting/meeting_show_container";
import MeetingEditContainer from "./meeting/meeting_edit_container";
import TaskFormContainer from "./task/task_form_container";
import TaskShowContainer from "./task/task_show_container";
import TaskEditContainer from "./task/task_edit_container";
import MeetingIndexContainer from "./meeting/meeting_index_container";
import "./session/css_reset.css";

const App = () => (
  <div>
    <Modal />
    <MainNavBarContainer />
    <Switch>
      <ProtectedRoute exact path="/tasks/new" component={TaskFormContainer} />
      <ProtectedRoute exact path="/meetings/new" component={MeetingContainer} />
      <Route exact path='/ourteam' component={Team} />
      <Route
        exact
        path="/meetings/:meetingId"
        component={MeetingShowContainer}
      />
      <Route exact path="/tasks/:taskId" component={TaskShowContainer} />
      <Route exact path="/meetings" component={MeetingIndexContainer} />
      <ProtectedRoute
        exact
        path="/meetings/:meetingId/edit"
        component={MeetingEditContainer}
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
    {/* <Footer /> */}
  </div>
);

export default App;
