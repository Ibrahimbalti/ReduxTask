import React from "react";
import { Content } from "../dashboard/Content";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import "./home.css";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className='homecontainer'>
        <Sidebar />
        <Content />
      </div>

      <Footer />
    </>
  );
};

export default Home;
