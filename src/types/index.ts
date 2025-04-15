export interface Article {
  id: number;
  title: string;
  image_url: string;
  summary: string;
  published_at: string;
  url: string;
  news_site: string;
}

export interface ArticleDetail extends Article {
  updated_at: string;
  launches: [];
  events: [];
  featured: boolean;
}
