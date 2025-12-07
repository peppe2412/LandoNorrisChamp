"use client";
import { useState } from "react";

export default function Home() {
  const [addPhrase, setAddPhrase] = useState("");

  const handleChange = (e) => {
    setAddPhrase(e.target.value);
  };

  return (
    <>
      <h1 className="text-6xl text-red-400">Ciao</h1>
      <button className="btn btn-success btn-xs">Button</button>
      <button className="btn btn-outline btn-info btn-lg">Info</button>
      <div className="mt-5">
        <form action={handleChange}>
          <div className="join">
            <div>
              <label className="input validator join-item">
                <input type="text" value={addPhrase} onChange={handleChange} required />
              </label>
            </div>
          </div>
        </form>
        <p>{addPhrase}</p>
      </div>
    </>
  );
}
