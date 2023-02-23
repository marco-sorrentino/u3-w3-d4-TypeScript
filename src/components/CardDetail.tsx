import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Detail } from "../types/detail";

const CardDetail = () => {
  const params = useParams();
  const [detail, setDetail] = useState<Detail>({} as Detail);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles/" + params.id
      );
      if (res.ok) {
        const detail = await res.json();
        console.log(detail);
        setDetail(detail);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid className="">
      <Row>
        <Col className="p-0">
          <Card>
            <Card.Img id="img-detail" variant="top" src={detail.imageUrl} />
            <Card.Body>
              <Card.Title>{detail.title}</Card.Title>
              <Card.Text>{detail.summary}</Card.Text>
              <Card.Text id="date">{detail.publishedAt}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardDetail;
