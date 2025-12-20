"use client";
import { useState } from "react";
import Confetti from "react-confetti-boom";
import Header from "./sections/header/Header";
import DescriptionChamp from "./sections/descriptionChamp/DescriptionChamp";
import PilotDetails from "./sections/details/pilotDetails/PilotDetails";

export default function Home() {
  return (
    <>
      <Confetti
        mode="boom"
        particleCount={1000}
        shapeSize={15}
        spreadDeg={100}
        colors={["#ff8000", "#ffd700"]}
        style={{position: "fixed"}}
      />
      <Header />

      <section className="sections-container">
        <DescriptionChamp />
      </section>

      <section id="details" className="sections-container">
        <PilotDetails />
      </section>
    </>
  );
}
