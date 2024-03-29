
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
//

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
import "./App.css";
import { useState } from "react";
import State from "./components/State.jsx";
import NavBar from "./components/NavBar.jsx";
import { useEffect } from "react";

function App() {
    const [index, setIndex] = useState(0);
    const pokemonList = [
        {
            name: "Carchacrok",
            imgSrc: "https://www.pokepedia.fr/images/thumb/6/69/Carchacrok-DEPS.png/800px-Carchacrok-DEPS.png",
            att:100,
            def:100,
            hp:100,
            types:"dragon ground",
            sound:"RRRR"
        },
        {
            name: "mew",
            imgSrc: "https://www.pokepedia.fr/images/thumb/1/16/Mew-DEPS.png/800px-Mew-DEPS.png",
            att:100,
            def:100,
            hp:100,
            types:"psychic",
            sound:"oooooo"
        },
        {
            name: "Charizard",
            imgSrc: "https://static.wikia.nocookie.net/pokemonunite/images/3/3a/Charizard_art.png",
            att:100,
            def:100,
            hp:100,
            types:"fire fly",
            sound:"aaaaa"
        },
    ];




    return (
        <div className="app">
        {/* <div className="conteneur">
            <PokemonCard props={pokemonList[0]}/>
            <PokemonCard props={pokemonList[1]}/>
            <PokemonCard  props={pokemonList[2]} />
        
        </div> */}

        <div className="img"><img src="https://static.thenounproject.com/png/1390899-200.png" alt="" /></div>
        <div className="conteneur"><PokemonCard props={pokemonList[index]} /><State props={pokemonList[index]}/> </div>
        
        
        <NavBar Setindex={setIndex} pokindex={index} tab={pokemonList}/>
        </div>
    );
}


export default App;
