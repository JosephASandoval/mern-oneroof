import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import CompletesContainer from "./completes_container";
import ChoresContainer from "./chores_container";
import ExpensesContainer from "./expenses_container";
import MeetingsContainer from "./meetings_container";
import MeetingIndexContainer from "../meeting/meeting_index_container";
import ChatContainer from "../chat/chat_container";
import "./navbar.css";

const NavBar = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (newValue) => {
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
        <Tab className="tab-labels" label="All Chores" />
        <Tab className="tab-labels" label="All Expenses" />
        <Tab className="tab-labels" label="Completed Tasks" />
        <Tab className="tab-labels" label="All Meetings" />
        <Tab className="tab-labels" label="Joined Meetings" />
        <Tab className="tab-labels" label="Live Chat" />
      </Tabs>

      <div className="tab">{selectedTab === 0 && <ChoresContainer />}</div>
      <div className="tab">{selectedTab === 1 && <ExpensesContainer />}</div>
      <div className="tab">{selectedTab === 2 && <CompletesContainer />} </div>
      <div className="tab">
        {selectedTab === 3 && <MeetingIndexContainer />}
      </div>
      <div className="tab">{selectedTab === 4 && <MeetingsContainer />}</div>
      <div className="tab">{selectedTab === 5 && <ChatContainer />}</div>
    </div>
  );
};

export default NavBar;
