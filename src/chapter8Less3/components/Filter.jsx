import React from "react";
import { Tabs, Tab } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const tabIndex = ["all", "active", "completed"];

const Filter = () => {
  const dispatch = useDispatch();
  const filterBy = useSelector((state) => state.filterBy);
  const onTabClick = (index) => {
    const filterIndex = tabIndex[index];
    dispatch({
      type: "TAB_CLICK",
      payload: filterIndex,
    });
  };
  return (
    <Tabs
      onChange={(_, index) => onTabClick(index)}
      value={tabIndex.indexOf(filterBy)}
    >
      <Tab id="all" label="Все" />
      <Tab id="active" label="Активные" />
      <Tab id="completed" label="Завершённые" />
    </Tabs>
  );
};

export default Filter;
