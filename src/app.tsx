import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import ShowGithubUser from "./components/ShowGithubUser";
import GithubUserList from "./components/GithubUserList";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/counter">Counter</Link> |{" "}
        <Link to="/users">Utenti GitHub</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="Martina" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<p>Aggiungi un utente e selezionalo</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<h2>404 - Pagina non trovata</h2>} />
      </Routes>
    </div>
  );
}

export default App;