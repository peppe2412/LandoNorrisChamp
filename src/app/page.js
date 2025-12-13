"use client";
import { useState } from "react";
import Header from "./sections/header/Header";
import DescriptionChamp from "./sections/descriptionChamp/DescriptionChamp";

export default function Home() {
  return (
    <>
      <Header />

      <section className="mt-10">
        <DescriptionChamp />
      </section>

      <section>
        
      </section>
    </>
  );
}
