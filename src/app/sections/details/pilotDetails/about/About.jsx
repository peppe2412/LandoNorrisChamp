import { useState, useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Surname from "./surname/Surname";

export default function About() {
  const [showAboutDesc, setShowAboutDesc] = useState(false);
  const aboutDesc = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowAboutDesc(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutDesc.current) {
      observer.observe(aboutDesc.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={aboutDesc}>
      {showAboutDesc && (
        <TypeAnimation
          wrapper="p"
          sequence={[
            " Nato a Bristol, nel sud-ovest dell'Inghilterra, dopo l'inizio nelle categorie minori in patria dal 2019 gareggia in Formula 1 con la McLaren, con cui si è laureato vicecampione del mondo nel 2024. Nella scorsa stagione ha vinto 4 gare, la prima il 5 maggio al Gran Premio di Miami e l'ultima ad ad Abu Dhabi",
          ]}
          speed={70}
          className="about"
        />
      )}
    </div>
  );
}
