import React, { useEffect } from "react";
import { SectionContainer } from "./DashboardElements";
import scrollreveal from "scrollreveal";
import Navbar from "../Navbar/Navbar";
import Analytics from "../Analytics/Analytics";
import FAQ from "../FAQ/FAQ";
import Earning from "../Earning/Earning";
import Transfer from "../Transfer/Transfer";
import Profile from "../Profile/Profile";

const Dashboard = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
      nav,
      .row__one,
      .row__two
 `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);

  return (
    <>
      <SectionContainer>
        <Navbar />
        <div className="grid">
          <div className="row__one">
            <Analytics />
            <FAQ />
          </div>
          <div className="row__two">
            <Earning />
            <Transfer />
            <Profile />
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Dashboard;
