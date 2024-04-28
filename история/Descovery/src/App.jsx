import East from "./components/Content/East/east";
import Countent from "./components/Content/Countent";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Bromo from "./components/Content/Bromo/Bromo";
import "./index.css";
import Culture from "./components/Content/Culture/Culture";
import Footer from "./components/Content/Footer/Footer";

function App() {
  return (
    <div>
      <main>
        <Hero />
        <Header />
      </main>
      <section id="main">
        <Countent />
      </section>
      <section id="east">
        <East />
      </section>
      <section id="bromo">
        <Bromo />
      </section>
      <section id="culture">
        <Culture />
      </section>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
