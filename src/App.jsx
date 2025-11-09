import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { useState } from "react";
import { ways } from "./data";

function App() {
  const [content, setContent] = useState("нажми на кнопку");

  // let content = 'нажми на кнопку'

  const handleClick = (type) => {
    // console.log('Button clicked', type);
    setContent(type);
    //content = type
  };

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>наш подход к обучению test</h3>
          <ul>
            <WayToTeach
              title={ways[0].title}
              description={ways[0].description}
            />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button onClick={() => handleClick("way")}>Подход</Button>
          <Button onClick={() => handleClick("easy")}>Доступность</Button>
          <Button onClick={() => handleClick("program")}>Концентрация</Button>

          <p>{content}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
