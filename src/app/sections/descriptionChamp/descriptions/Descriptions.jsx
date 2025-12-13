import { useState, useRef, useEffect } from "react";

export default function Descriptions() {
  // typing
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setdisplayedText] = useState("");
  const descriptionRef = useRef(null);
  const descriptions =
    " Con coraggio e talento, Lando Norris ha conquistato il titolo mondiale 2025, dominando le piste e dimostrando che il futuro della F1 è già nelle sue mani. Il suo stile audace e innovativo promette un'era dorata per la Formula 1, dove il talento incontra il destino.";

  const tipyngDescription = (text) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setdisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);
  };

  useEffect(() => {
    const observ = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isTyping) {
          setIsTyping(true);
          tipyngDescription(descriptions);
          observ.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (descriptionRef.current) {
      observ.observe(descriptionRef.current);
    }

    return () => observ.disconnect();
  }, []);

  return (
    <div ref={descriptionRef}>
      <p className="desc">{displayedText}</p>
    </div>
  );
}
