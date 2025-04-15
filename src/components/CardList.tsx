import { useEffect, useState } from "react";
import { Article } from "../types";
import SingleCard from "./SingleArticle";
import { Container, Row } from "react-bootstrap";

function CardList() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel caricamento degli articoli");
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.results);
      })
      .catch((error) => {
        console.error("Errore nel fetch degli articoli:", error);
      });
  }, []);

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">🛰️ Spaceflight News</h1>
      <Row>
        {articles.map((article) => (
          <SingleCard key={article.id} article={article} />
        ))}
      </Row>
    </Container>
  );
}

export default CardList;
