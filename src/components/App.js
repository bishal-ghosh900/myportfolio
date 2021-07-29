import "./App.css";
import Welcome from "./Welcome";
import Skills from "./Skills";
import Projects from "./Projects";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />
      <section className="section">
        <Welcome />
      </section>
      <section className="section">
        <Skills />
      </section>
      <section className="section">
        <Projects />
      </section>
    </div>
  );
}

export default App;
