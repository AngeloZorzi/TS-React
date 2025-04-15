import { Article } from "../types";
import { Link } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";
import { format } from "date-fns";

function SingleCard({ article }: { article: Article }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="d-flex">
      <Card className="mb-4 article-card shadow-sm">
        <div className="article-image-wrapper">
          <Card.Img
            variant="top"
            src={article.image_url}
            alt={article.title}
            className="article-img"
          />
        </div>
        <Card.Body className="d-flex flex-column">
          <h5 className="article-title">{article.title}</h5>
          <p className="article-meta">
            {format(new Date(article.published_at), "dd MMM yyyy")} -{" "}
            {article.news_site}
          </p>
          <p className="article-summary">{article.summary.slice(0, 100)}...</p>
          <Link to={`/article/${article.id}`} className="mt-auto">
            <Button variant="outline-primary">Leggi di più</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default SingleCard;
