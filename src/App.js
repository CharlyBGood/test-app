import "./App.css";
import Testimony from "./components/Testimony.js";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>This is a testimony section mockup:</h1>
        <Testimony
          name="He-Man"
          country="Eternia"
          img="heman"
          job="Fighter and Fitness Coach"
          company="Grayskull"
          testimony="I'm one of the Masters Of The Universe, and I will protect the planet from Skeletor!! Also I like to dance and eat eggs for breakfast."
        />
        <Testimony
          name="Daria"
          country="California"
          img="daria"
          job="Uninterested"
          company="Wherever"
          testimony="I've never been curious, and I'm just here to mockup an opinion about this site. Just because Charly want to show that he can make sections on React."
        />
        
      </div>
    </div>
  );
}

export default App;
