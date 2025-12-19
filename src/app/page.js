"use client";
import { useState } from "react";
import Header from "./sections/header/Header";
import DescriptionChamp from "./sections/descriptionChamp/DescriptionChamp";
import PilotDetails from "./sections/details/pilotDetails/PilotDetails";

export default function Home() {
  return (
    <>
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
