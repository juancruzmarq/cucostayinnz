import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./Card";
import { ColorsInfo } from "./ColorsInfo";
import { Header } from "./Header";
import noticias from "./noticias.json";
import { Card as Noticia } from "./types/Card.type";

function App() {
  const [news, setNews] = useState<Noticia[]>([]);
  const [clickedColor, setClickedColor] = useState<string>("");

  useEffect(() => {
    // order by date desc
    const sorted = noticias.sort((a, b) => {
      const [diaA, mesA, anioA] = a.date
        .split("/")
        .map((item) => parseInt(item));
      const dateA = new Date(anioA, mesA, diaA);
      const [diaB, mesB, anioB] = b.date
        .split("/")
        .map((item) => parseInt(item));
      const dateB = new Date(anioB, mesB, diaB);
      return dateB.getTime() - dateA.getTime();
    });

    setNews(sorted);
  }, []);

  const handleColorPicker = (color: string) => {
    if (clickedColor === color) {
      setClickedColor("");
      setNews(noticias);
      return;
    }
    setClickedColor(color);
    const filteredNews = noticias.filter((noticia) => {
      return noticia.nivel === color;
    });
    setNews(filteredNews);
  };

  return (
    <div className="App">
      <Header />
      <ColorsInfo colorPicker={handleColorPicker} />
      <div className="flex flex-col bg-background rounded-md justify-items-center items-center justify-center m-5 gap-4">
        {news?.map((noticia) => {
          return <Card noticia={noticia} />;
        })}
      </div>
    </div>
  );
}

export default App;
