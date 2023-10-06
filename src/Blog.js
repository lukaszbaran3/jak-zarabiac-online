import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
function Blog() {
  return (
    <>
      <h1>Jak zarabiać online?</h1>
      <div className="container">
        Witaj na mojej stronie poświęconej fascynującemu światowi zarabiania
        przez internet! Czy marzysz o tym, aby pracować z dowolnego miejsca na
        świecie, mieć elastyczny harmonogram i kontrolować swoje finanse? Jeśli
        tak, to jesteś we właściwym miejscu. Tutaj znajdziesz niezwykle
        przydatne informacje, porady i strategie, które pomogą Ci rozpocząć
        swoją przygodę z zarabianiem online. Dowiedz się, jakie są różne
        możliwości zarabiania w sieci, od pracy zdalnej, przez handel
        elektroniczny, po tworzenie treści online. Będę Cię prowadzić przez
        kroki, które pozwolą Ci zacząć, a także podpowiem, jak unikać pułapek i
        oszustw, które niestety mogą czaić się na ścieżce do sukcesu.
        Niezależnie od tego, czy jesteś studentem, osobą pracującą w tradycyjnym
        miejscu pracy, czy poszukujesz dodatkowych źródeł dochodu, tutaj
        znajdziesz inspirację i wiedzę, która pomoże Ci osiągnąć swoje cele
        finansowe. Przygotuj się na ekscytującą podróż w świat zarabiania przez
        internet. Zacznijmy razem!
      </div>
      <h2>Od czego chcesz zacząć?</h2>
      <Link to="/cashback">
        <button>Cashback</button>
      </Link>
      <Link to="/gry_i_ankiety">
        <button>Gry i ankiety</button>
      </Link>
      <Link to="/bukmacherzy">
        <button>Bukmacherzy</button>
      </Link>
    </>
  );
}

export default Blog;
