import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { article } from "../types/article";
import { Link } from "react-router-dom";

const CardList = () => {
  const [articles, setArticles] = useState<article[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
      if (res.ok) {
        const articles = await res.json();
        setArticles(articles);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Row>
        {articles?.map((el) => {
          return (
            <Col key={el.id}>
              <Card>
                <Card.Img variant="top" src={el.imageUrl} />
                <Card.Body>
                  <Card.Title>{el.title}</Card.Title>
                  <Card.Title>{el.publishedAt}</Card.Title>
                  <Button variant="primary">
                    <Link to={"/articles/" + el.id}>READ MORE</Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CardList;
