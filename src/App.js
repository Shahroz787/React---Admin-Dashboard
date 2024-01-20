// import React from "react";
// // import styled from "styled-components";
// import Dashboard from "./Components/Dashboard";
// // import Profile from "./Components/Profile";
// import Sidebar from "./Components/Sidebar";
// // import Analytics from "./Components/Analytics";
// // import Navbar from "./Components/Navbar";
// // import Earning from "./Components/Earning";
// // import Transfer from "./Components/Transfer";
// // import FAQ from "./Components/FAQ";

import React from "react";
import styled from "styled-components";
import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;

const Div = styled.div``;
