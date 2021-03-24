import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import TasksContainer from "./tasks_container";
import CompletesContainer from "./completes_container";
import ChoresContainer from "../category-nav/chores_container";
import ExpensesContainer from "../category-nav/expenses_container";
import EventsContainer from "./events_container";
import EventIndexContainer from "../event/event_index_container";
import ChatContainer from "../chat/chat_container";
import "./navbar.css";
import "../category-nav/category_navbar.css";

const NavBar = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="category-navbar-component">
      <Tabs
        className="tab-header"
        value={selectedTab}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#163172",
          },
        }}
      >
        <Tab className="tab-labels" label="Created Tasks" />
        <Tab className="tab-labels" label="Completed Tasks" />
        <Tab className="tab-labels" label="All Chores" />
        <Tab className="tab-labels" label="All Expenses" />
        <Tab className="tab-labels" label="Joined Meetings" />
        <Tab className="tab-labels" label="All Meetings" />
        <Tab className="tab-labels" label="Live Chat" />
      </Tabs>

      <div className="tab">{selectedTab === 0 && <TasksContainer />}</div>
      <div className="tab">{selectedTab === 1 && <CompletesContainer />} </div>
      <div className="tab">{selectedTab === 2 && <ChoresContainer />}</div>
      <div className="tab">{selectedTab === 3 && <ExpensesContainer />}</div>
      <div className="tab">{selectedTab === 4 && <EventsContainer />}</div>
      <div className="tab">{selectedTab === 5 && <EventIndexContainer />}</div>
      <div className="tab">{selectedTab === 6 && <ChatContainer />}</div>
    </div>
  );
};

export default NavBar;
