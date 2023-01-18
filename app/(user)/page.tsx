import React from "react";
import CallToAction from "../../components/CTA";
import Hero from "../../components/Hero";
import LastProducts from "../../components/LastProducts";

export const revalidate = 30;

function HomePage() {
  return (
    <div>
      <Hero></Hero>
      <LastProducts></LastProducts>
      <CallToAction></CallToAction>
    </div>
  );
}

export default HomePage;
