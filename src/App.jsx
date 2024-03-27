// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//     const [count, setCount] = useState(0);

//     return (
//         <>
//             <div>
//                 <a href="https://vitejs.dev" target="_blank">
//                     <img src={viteLogo} className="logo" alt="Vite logo" />
//                 </a>
//                 <a href="https://react.dev" target="_blank">
//                     <img
//                         src={reactLogo}
//                         className="logo react"
//                         alt="React logo"
//                     />
//                 </a>
//             </div>
//             <h1>Vite + React</h1>
//             <div className="card">
//                 <button onClick={() => setCount((count) => count + 1)}>
//                     count is {count}
//                 </button>
//                 <p>
//                     Edit <code>src/App.jsx</code> and save to test HMR
//                 </p>
//             </div>
//             <p className="read-the-docs">
//                 Click on the Vite and React logos to learn more
//             </p>
//         </>
//     );
// }

// export default App;
import PokemonCard from "./components/PokemonCard.jsx";

function App() {
    const pokemonList = [
        {
            name: "Carchacrok",
            imgSrc: "https://www.pokepedia.fr/images/thumb/6/69/Carchacrok-DEPS.png/800px-Carchacrok-DEPS.png",
        },
        {
            name: "mew",
            imgSrc: "https://www.pokepedia.fr/images/thumb/1/16/Mew-DEPS.png/800px-Mew-DEPS.png",
        },
    ];
    return (
        <div className="conteneur">
            <PokemonCard props={pokemonList[0]}/>
            <PokemonCard props={pokemonList[1]}/>
        </div>
    );
}


export default App;
