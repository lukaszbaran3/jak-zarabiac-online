import React from "react";
import { Link } from "react-router-dom";
function Buk() {
  return (
    <>
      <div>
        <h2>Fortuna - Twoje miejsce na emocje sportowe!</h2>
        🏆 Czy jesteś gotów na ekscytujący świat sportu i zakładów
        bukmacherskich? Witaj w Fortuna! Fortuna to nie tylko bukmacheria, to
        miejsce, gdzie sport staje się emocjonującym doświadczeniem. Dlaczego
        warto wybrać nas?
        <ul>
          <li>
            ✅ Bogata oferta zakładów - Typuj wyniki meczów, strzelców bramek,
            czy wyniki wirtualnych rozgrywek.
          </li>
          <li>
            💰 Atrakcyjne kursy - Wygraj więcej dzięki konkurencyjnym kursom.
          </li>
          <li>
            📱 Aplikacja mobilna - Typuj i śledź wyniki na swoim telefonie,
            gdziekolwiek jesteś.
          </li>
          <li>
            🎁 Promocje i bonusy - Odbierz bonus powitalny i korzystaj z
            regularnych promocji.
          </li>
          <li>
            🔒 Bezpieczeństwo - Jesteśmy licencjonowanym operatorem gier
            hazardowych.
          </li>
        </ul>
        Niezależnie od tego, czy jesteś fanem piłki nożnej, koszykówki, esportu
        czy innych dyscyplin sportowych, w Fortuna znajdziesz coś dla siebie.
        Dołącz do nas już teraz i weź udział w emocjonującej grze!{" "}
        <p>
          <a
            href="https://account.efortuna.pl/pl/register?referrer=X0xAbLtD6YAv1IY6lgzosvVgH78w%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            👉Zarejestruj się na Fortuna.pl
          </a>
        </p>
        Dzięki Fortuna, każdy mecz staje się jeszcze bardziej pasjonujący, a
        wygrane są na wyciągnięcie ręki.
      </div>
      <Link to="/cashback">
        <button>Cashback</button>
      </Link>
      <Link to="/gry_i_ankiety">
        <button>Gry i ankiety</button>
      </Link>
    </>
  );
}

export default Buk;
