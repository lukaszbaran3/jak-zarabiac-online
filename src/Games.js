import React from "react";
import { Link } from "react-router-dom";
function Games() {
  return (
    <>
      <div>
        <h2>Zdobądź Nagrody za Swój Czas z Swagbucks!</h2>
        🎁 Czy chciałbyś być nagradzany za to, co już robisz online? Przywitaj
        się z Swagbucks, miejscem, gdzie Twój czas przekształca się w wartość!
        Swagbucks to więcej niż tylko strona internetowa – to możliwość
        zarabiania na swojej codziennej aktywności online. Dlaczego warto do nas
        dołączyć?
        <ul>
          <li>
            ✨Zarabiaj punkty SB – Oglądaj filmy, robi zakupy online, graj w
            gry, wypełniaj ankiety i więcej, zdobywając punkty Swagbucks.{" "}
          </li>
          <li>
            🎯 Wymieniaj punkty na nagrody – Zamieniaj swoje SB na vouchery do
            sklepów, gotówkę PayPal, karty podarunkowe i wiele innych nagród.{" "}
          </li>
          <li>
            💰 Ekstra zarobki – Udostępniaj swoje opinie, korzystaj z
            codziennych ofert i promocji, aby zdobywać jeszcze więcej punktów.{" "}
          </li>
          <li>
            📱 Aplikacja mobilna – Zarabiaj i wymieniaj punkty na nagrody,
            gdziekolwiek jesteś.
          </li>
        </ul>{" "}
        Dołącz do milionów zadowolonych użytkowników Swagbucks i zacznij
        zarabiać już dziś!
        <p>
          <a
            href="https://www.swagbucks.com/p/register?rb=150470744&rp=1"
            target="_blank"
            rel="noreferrer"
          >
            👉 Zarejestruj się na Swagbucks
          </a>
        </p>{" "}
        W Swagbucks Twój czas i wysiłek są doceniane. Zdobądź nagrody za
        korzystanie z Internetu i ciesz się dodatkowymi korzyściami już teraz.
        To łatwe i satysfakcjonujące!
      </div>
      <Link to="/cashback">
        <button>Cashback</button>
      </Link>
      <Link to="/bukmacherzy">
        <button>Bukmacherzy</button>
      </Link>
    </>
  );
}

export default Games;
