import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import Produits from "./Components/Produits";

const products = [
  {
    id: 1,
    title: "PC Portable Gamer HP VICTUS",
    price: "7490 DH",
    thumbnail: "HP16D0195NF.jpg",
  },
  {
    id: 2,
    title: "PC Portable Gamer HP VICTUS",
    price: "2190 DH",
    thumbnail: "HP14424U3EA.jpg",
  },
  {
    id: 3,
    title: "Pc Portable Chromebook Acer",
    price: "3640 DH",
    thumbnail: "NXATHEF002.jpg",
  },
  {
    id: 4,
    title: "PC Portable - HUAWEI",
    price: "1270 DH",
    thumbnail: "HUA6901443442959.jpg",
  },
];

function App() {
  const [nbrPanier, setNbrPanier] = useState(1);
  function modifierPanier() {
    setNbrPanier(nbrPanier + 1);
  }
  return (
    <div className="app">
      <h1>
        Liste produits <span className="panier">{nbrPanier}</span>
      </h1>
      {/* <button onClick={() => modifierPanier()}>Modifier Panier</button> */}

      <Produits list={products} nbrPanierHandler={modifierPanier} />
    </div>
  );
}

export default App;
