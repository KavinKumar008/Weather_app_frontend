import "./App.css";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Navbar from "./nav/Navbar";

function App() {
  return (
    <div
      style={{
        backgroundColor: "hsl(243, 96%, 9%)",
        height: "auto",
        width: "auto",
      }}
    >
      <Navbar />
      <Header />
      <Hero />
    </div>
  );
}

export default App;
