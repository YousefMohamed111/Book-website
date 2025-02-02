import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Hero } from "../Hero/Hero";
import { Books } from "../Section/SectionBooks";
import { About } from "../About us/About";
import { End } from "../End/End";
export function Home() {
  return (
    <>
      <NavBar />
      <div id="hero">
        <Hero />
      </div>
      <div id="books">
        <Books />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <End />
      </div>
    </>
  );
}
