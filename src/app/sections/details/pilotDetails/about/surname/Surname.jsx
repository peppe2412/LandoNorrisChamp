import { TypeAnimation } from "react-type-animation";
import { useState, useRef, useEffect } from "react";

export default function Surname() {
  const [showSurnameDesc, setShowSurnameDesc] = useState(false);
  const surnameDesc = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowSurnameDesc(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    if (surnameDesc.current) {
      observer.observe(surnameDesc.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={surnameDesc}>
      {showSurnameDesc && (
        <TypeAnimation
          wrapper="p"
          sequence={[
            "Il suo soprannome, 'Last Lap Lando' se lo è guadagnato per le sue incredibili performance negli ultimi giri delle gare. Un esempio memorabile è stato il Gran Premio d’Austria 2020, dove ha registrato il giro più veloce, ridotto il distacco da Lewis Hamilton e ottenuto il suo primo podio. Per la legge del contrappasso, anche il suo primo Mondiale se lo è dovuto sudare fino all'ultimo giro.",
          ]}
          speed={70}
          className="about"
        />
      )}
    </div>
  );
}
