import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/seasons/now")
      .then((response) => {
        return response.json();
      })
      .then((articulos) => {
        setInfo(articulos["data"]);
        setLoading(false);
        console.log(articulos.data[0]);
      })
      .catch(() => {
        console.log("no se pudo traer la informacion");
      });
  }, []);

  if (loading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="bg-slate-800">
      <h1 className="font-cobin font-bold text-white text-4xl text-center p-5">Animes de Temporada</h1>
      <div className="grid sm:grid-cols-4 grid-cols-1 place-content-center place-items-center">
        {info.map((x) => (
          <Card
            key={x.mal_id}
            img={x.images.webp.large_image_url}
            title={x.title}
            titleJap={x.title_japanese}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
