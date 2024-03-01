import { AppProvider } from '../utils/context';
import { useContext, useEffect, useState } from "react";
import Calendar from "../components/calendar";
import BarChart from "../components/bar_chart";
import PolarChart from "../components/polar_chart";
// import groupByYearMonth from "../utils/groupByDate";

const Exchange = (props) => {
  return (
    <>
      <Calendar /> 
      <div style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <BarChart />
        <PolarChart />
      </div>
    </>
  );
};

export default Exchange;