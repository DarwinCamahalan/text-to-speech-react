import React from "react";
import { Helmet } from "react-helmet";
import NavigationBar from "../components/NavBar";
import Social from "../components/Social";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import Header3 from "../components/Header3";
import Header4 from "../components/Header4";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <NavigationBar />
      <Social />
      <audio autoPlay loop>
        <source src="/assets/music/electric.mp3" />
      </audio>
      <Header />
      <Header2 />
      <Header3 />
      <Header4 />
      <Footer />
    </div>
  );
}
