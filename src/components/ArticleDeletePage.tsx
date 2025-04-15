import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import { ArticleDetail } from "../types";
import { Button, Container } from "react-bootstrap";

export function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleDetail | null>(null);

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel caricamento dell'articolo");
        }
        return response.json();
      })
      .then((data) => {
        setArticle(data);
      })
      .catch((error) => {
        console.error("Errore nel fetch dell'articolo:", error);
      });
  }, [id]);

  if (!article) return <div className="p-4">Caricamento...</div>;

  return (
    <Container className="py-4 article-detail-container">
      <img src={article.image_url} alt={article.title} className="detail-img" />
      <h1 className="detail-title">{article.title}</h1>
      <p className="detail-meta">
        Pubblicato il {format(new Date(article.published_at), "dd MMM yyyy")} da{" "}
        {article.news_site}
      </p>
      <p className="detail-summary">{article.summary}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Leggi su sito ufficiale
      </a>
      <Link to={"/"}>
        <Button variant="outline-dark" className="ms-5">
          Home
        </Button>
      </Link>
    </Container>
  );
}
