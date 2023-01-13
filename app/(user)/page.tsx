import React, { Fragment, useState, useEffect } from "react";
import "../../components/Hero";
import Hero from "../../components/Hero";
import LastProducts from "../../components/LastProducts";
import Navbar from "../../components/Navbar";

export const revalidate = 30; // revalidate this page every 60 seconds

function HomePage() {
  return (
    <div>
      <Hero></Hero>
      <LastProducts></LastProducts>
    </div>
  );
}

export default HomePage;
