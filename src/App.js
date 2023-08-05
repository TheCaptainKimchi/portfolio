import "./App.scss";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Banner from "./Components/Banner/Banner";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Banner />
      <Projects />
    </div>
  );
}

export default App;
