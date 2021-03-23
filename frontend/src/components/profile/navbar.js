import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import TasksContainer from "./tasks_container";
import CompletesContainer from "./completes_container";
import EventsContainer from "./events_container";
import PostsContainer from "../category-nav/posts_container";
import ChoresContainer from "../category-nav/chores_container";
import ExpensesContainer from "../category-nav/expenses_container";
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
        <Tab className="tab-labels" label="My Tasks" />
        <Tab className="tab-labels" label="Completed Tasks" />
        <Tab className="tab-labels" label="Events" />
        <Tab className="tab-labels" label="Posts" />
        <Tab className="tab-labels" label="Chores" />
        <Tab className="tab-labels" label="Expenses" />
      </Tabs>

      <div className="tab">{selectedTab === 0 && <TasksContainer />}</div>
      <div className="tab">{selectedTab === 1 && <CompletesContainer />} </div>
      <div className="tab">{selectedTab === 2 && <EventsContainer />}</div>
      <div className="tab">{selectedTab === 3 && <PostsContainer />}</div>
      <div className="tab">{selectedTab === 4 && <ChoresContainer />}</div>
      <div className="tab">{selectedTab === 5 && <ExpensesContainer />}</div>
    </div>
  );
};

export default NavBar;
