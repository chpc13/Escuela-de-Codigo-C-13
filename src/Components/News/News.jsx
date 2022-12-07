import axios from "axios";
import React, { useEffect, useState } from "react";
import "./News.css";

const News = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const response = await axios.get("https://c13-app-back.up.railway.app/api/novelties?lot=3");
    setNews(response.data.novelties);
  };
  
useEffect(() => {
  getNews()
}, [])

  return (
    <div className="contenedor-noticias">
      <div className="contenedor">

        {news.length === 0 ? (
          <div className="sin-info">
            <h2>No hay <span>Noticias</span> para ver</h2>
          </div>
        ) : (
          news.map((news) => (
            <div className="notinoticia">
              <div key={news.id} className="">
                <div className="img">
                  <h1>{news.title}</h1>
                  <p className="img">{news.description}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default News;
