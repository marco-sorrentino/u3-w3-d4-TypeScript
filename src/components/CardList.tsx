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
            <Col md={3} key={el.id}>
              <Card id="card">
                <Card.Img id="img" variant="top" src={el.imageUrl} />
                <Card.Body>
                  <Card.Title className="text-truncate">{el.title}</Card.Title>
                  <Card.Text className="text-truncate">{el.summary}</Card.Text>
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
