import "./App.css";
import Header from "./Header";
import Section from "./Section";
import movies from "./movies.json";

function App() {
  // map movies data & call section component for each iteration
  const tab = movies.map((element, index) => {
    return <Section key={index} section={element} />;
  });
  // return main component
  return (
    <div className="App">
      <Header />
      <div className="sections">{tab}</div>
    </div>
  );
}

export default App;
