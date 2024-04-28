import "./Header/header.css";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Collections from "./Content/Collections";
function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <section>
          <Hero />
        </section>
        <section>
          <Collections />
        </section>
      </main>
    </div>
  );
}

export default App;
