// import React from "react";
// import { Tabs, Tab } from "@mui/material";
// import { useSelector, useDispatch } from "react-redux";

// const filterIndex = {
//   all: 0,
//   active: 1,
//   completed: 2,
// };

// const Filter = () => {
//   const dispatch = useDispatch;
//   const filterBy = useSelector((state) => state.filterBy);
  
//   const setFilter = (_, newIndex) => {
//     const status = Object.keys(filterIndex)[newIndex];
//     dispatch({
//       type: "SET_FILTER",
//       payload: status,
//     });
//   };

//   return (
//     <Tabs onChange={setFilter} value={filterIndex[filterBy]}>
//       <Tab id="all" label="Все" />
//       <Tab id="active" label="Активные" />
//       <Tab id="completed" label="Завершённые" />
//     </Tabs>
//   );
// };

// export default Filter;
