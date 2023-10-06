import React from "react";
import "./Cashback.css";
import { Link } from "react-router-dom";
function Cashback() {
  return (
    <div>
      <h2>Oszczędzaj z LetyShops – Wracaj gotówką za zakupy online!</h2>
      <p>
        Czy chcesz oszczędzać podczas zakupów online? Oczywiście, że tak! Z
        LetyShops to możliwe. LetyShops to Twoje magiczne źródło gotówki z
        powrotem za każde zakupy online. Niezależnie od tego, czy robisz zakupy
        modowe, elektronikę, bilety lotnicze czy produkty spożywcze, możesz
        teraz zyskać coś więcej.
        <h3>Dlaczego warto wybrać LetyShops?</h3>
        <ul>
          <li>🌟 Cashback – Zarabiaj na każdym zakupie online.</li>
          <li>
            📱 Aplikacja mobilna – Zakupy z LetyShops na wyciągnięcie ręki.
          </li>
          <li>
            💼 Oferty specjalne – Korzystaj z ekskluzywnych promocji i rabatów.
          </li>
        </ul>{" "}
        <h3>Jak to działa?</h3> Zarejestruj się na LetyShops całkowicie za
        darmo. Przejdź na swoje ulubione sklepy za pośrednictwem LetyShops.
        Robisz zakupy online tak, jak zwykle. Ciesz się gotówką z powrotem na
        swoim koncie LetyShops. To proste, prawda? Nie czekaj dłużej! Dołącz do
        milionów użytkowników, którzy już oszczędzają z LetyShops. Odbierz swoją
        pierwszą premię za rejestrację już teraz!{" "}
        <p>
          <a
            href="https://letyshops.com/pl/winwin?ww=13155741"
            target="_blank"
            rel="noreferrer"
          >
            👉 Zarejestruj się na LetyShops
          </a>
        </p>{" "}
        Dzięki LetyShops oszczędzaj i ciesz się zakupami online bardziej niż
        kiedykolwiek wcześniej.{" "}
      </p>
      <Link to="/gry_i_ankiety">
        <button>Gry i ankiety</button>
      </Link>
      <Link to="/bukmacherzy">
        <button>Bukmacherzy</button>
      </Link>
    </div>
  );
}

export default Cashback;
