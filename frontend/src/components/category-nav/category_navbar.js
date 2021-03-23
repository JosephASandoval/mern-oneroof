import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import PostsContainer from "./posts_container";
import ChoresContainer from "./chores_container";
import ExpensesContainer from "./expenses_container";
import "./category_navbar.css";

const CategoryNavBar = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="category-navbar-component">
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#163172",
          },
        }}
      >
        <Tab label="Posts" />
        <Tab label="Chores" />
        <Tab label="Expenses" />
      </Tabs>
      {selectedTab === 0 && <PostsContainer />}
      {selectedTab === 1 && <ChoresContainer />}
      {selectedTab === 2 && <ExpensesContainer />}
    </div>
  );
};

export default CategoryNavBar;
