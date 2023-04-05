import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./Card";
import { ColorsInfo } from "./ColorsInfo";
import { Header } from "./Header";
import noticias from "./noticias.json";
import { Card as Noticia } from "./types/Card.type";

function App() {
  return (
    <div className="App ">
      <Header />
      <ColorsInfo />
      <div className="flex flex-col bg-background rounded-md justify-items-center items-center justify-center m-5 gap-4">
        {noticias.map((noticia) => {
          return <Card noticia={noticia} />;
        })}
      </div>
    </div>
  );
}

export default App;
