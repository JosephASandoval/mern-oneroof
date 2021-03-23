import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import TasksContainer from "./tasks_container";
import CompletesContainer from "./completes_container";
import EventsContainer from "./events_container";
import "./navbar.css";

const NavBar = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
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
      </Tabs>

      <div className="tab">{selectedTab === 0 && <TasksContainer />}</div>
      <div className="tab">{selectedTab === 1 && <CompletesContainer />} </div>
      <div className="tab">{selectedTab === 2 && <EventsContainer />}</div>
    </div>
  );
};

export default NavBar;
