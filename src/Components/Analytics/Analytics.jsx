import React from "react";
import {BiGroup} from "react-icons/bi";
import {BsFillCalendar2WeekFill} from "react-icons/bs";
import {FiActivity} from "react-icons/fi";
import {IoStatsChart} from "react-icons/io5";
import {Section} from "./AnalyticsElement";

const Analytics = () => {
  return (
    <Section>
      <div className="analytic">
        <div className="content">
          <h5>Spent this month</h5>
          <h2>$566.8</h2>
        </div>

        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
      </div>

      <div className="analytic">
        <div className="logo">
          <IoStatsChart />
        </div>
        <div className="content">
          <h5>Earnings</h5>
          <h2>$666.8</h2>
        </div>
      </div>

      <div className="analytic">
        <div className="logo">
          <BiGroup />
        </div>
        <div className="content">
          <h5>New Customers</h5>
          <h2>876</h2>
        </div>
      </div>

      <div className="analytic">
        <div className="content">
          <h5>Activities</h5>
          <h2>$876.88</h2>
        </div>

        <div className="logo">
          <FiActivity />
        </div>
      </div>
    </Section>
  );
};

export default Analytics;
