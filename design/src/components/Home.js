import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Rightbar from "./Rightbar";
import Center from "./Center";
const Home = () => {
  return (
    <React.Fragment>
      <div className="bg-rose-200 h-screen overflow-hidden">
        <div className="sticky">
          <Navbar />
        </div>
        <div className="flex  justify-start">
          <Sidebar />
          <div className="overflow-y-auto h-[800px] scrollbar-hide flex-1">
            <Center />
          </div>
          <div>
            <Rightbar />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
