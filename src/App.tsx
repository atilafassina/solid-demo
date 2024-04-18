import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import "./App.css";

const createArray = () => {
  console.info("Created array");
  return new Array(100).fill(null);
};

function App() {
  const [name, setName] =
    createSignal("Splinter");

  const [multiplier, setMultiplier] =
    createSignal(10);

  const list = createArray();

  return (
    <>
      <div>
        <a
          href="https://solidjs.com"
          target="_blank"
        >
          <img
            src={solidLogo}
            class="logo solid"
            alt="Solid logo"
          />
        </a>
      </div>
      <h1>Hello {name()}</h1>
      <input
        type="text"
        value={name()}
        onInput={(evt) =>
          setName(evt.currentTarget.value)
        }
      />

      <div>
        <input
          type="number"
          value={multiplier()}
          onInput={(evt) =>
            setMultiplier(
              Number(evt.currentTarget.value)
            )
          }
        />

        <ul>
          {list.map(() => (
            <li>
              {Math.floor(
                Math.random() * multiplier() + 1
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
