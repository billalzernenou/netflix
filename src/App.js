import "./App.css";
import Header from "./Header";
import Section from "./Section";
import movies from "./movies.json";

function App() {
  // return main component

  return (
    <div className="App">
      <Header />
      <div className="sections">
        {movies.map((element, index) => {
          return <Section key={index} section={element} />;
        })}
      </div>
    </div>
  );
}

export default App;
